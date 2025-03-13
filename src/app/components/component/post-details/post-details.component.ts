import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../../services/chat.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
interface Comment {
  id: number;
  postId: number;
  content: string;
  userId: number;
  createdAt: string;
  userNames: string;
}
interface Post {
  id: number;
  title: string;
  content: string;
}
@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  post: Post | null = null;
  comments: Comment[] = [];
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: ChatService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.getPostDetail(id);
        this.getComments(id);
      }
    });
  }

  getPostDetail(id: number) {
    this.postService.getPost(id).subscribe(
      (data) => {
        this.post = data;
      },
      (error) => console.error('Error al obtener el post:', error)
    );
  }
  getComments(id: number) {
    this.postService.getCommentsByPostId(id).subscribe(
      (data: Comment[]) => {
        this.comments = data;
      },
      (error) => console.error('Error al obtener los comentarios:', error)
    );
  }
  addComments() {
    if (!this.newComment.trim() || !this.post) return; // Evitar comentarios vacíos y verificar que el post no sea null

    this.postService.addComment(this.post.id, this.newComment).subscribe(
      (comment) => {
        this.comments.push(comment); // Agregar nuevo comentario a la lista
        this.newComment = ''; // Limpiar input
      },
      (error) => console.error('Error al agregar comentario:', error)
    );
  }
}
