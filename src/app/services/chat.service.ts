import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Post } from '../modules/shared/models/post.model';

interface Comment {
  id: number;
  postId: number;
  content: string;
  userId: number;
  createdAt: string;
  userNames: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  comments: any[] = [];
  private apiUrl = 'http://localhost:4000/posts';

  private commentsSubject = new BehaviorSubject<Comment[]>([]);
  public comments$ = this.commentsSubject.asObservable();

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
  }
  getCommentsAll(): Observable<Comment[]> {
    const httpOptions = { headers: this.getHeaders() };
    return this.http
      .get<Comment[]>('http://localhost:4000/comments', httpOptions)
      .pipe(
        tap((comments) => {
          this.commentsSubject.next(comments); // Actualiza el BehaviorSubject con los comentarios recibidos
        })
      );
  }

  getPosts(): Observable<Post[]> {
    const httpOptions = { headers: this.getHeaders() };
    return this.http.get<Post[]>(this.apiUrl, httpOptions);
  }

  addPost(post: Omit<Post, 'id'>): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post, {
      headers: this.getHeaders(),
    });
  }
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
    });
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
    });
  }

  addComment(postId: number, content: string): Observable<Comment> {
    return this.http
      .post<Comment>(
        'http://localhost:4000/comments',
        {
          postId: postId,
          content: content,
        },
        { headers: this.getHeaders() }
      )
      .pipe(
        tap((newComment) => {
          const currentComments = this.commentsSubject.value;
          this.commentsSubject.next([...currentComments, newComment]);
        })
      );
  }
  deleteComment(commentId: number): Observable<void> {
    return this.http
      .delete<void>(`http://localhost:4000/comments/${commentId}`, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap(() => {
          const updatedComments = this.commentsSubject.value.filter(
            (comment) => comment.id !== commentId
          );
          this.commentsSubject.next(updatedComments);
        })
      );
  }
}
