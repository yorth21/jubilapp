import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ChatService } from '../../../services/chat.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Post } from '../../../modules/shared/models/post.model';
import { AuthService } from '../../../services/auth.service';
interface Comment {
  id: number;
  postId: number;
  content: string;
  userId: number;
  createdAt: string;
  userNames: string;
}

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  mostrarPostForm = false;
  post: Post | null = null;
  comments: Comment[] = [];
  newComment: string = '';
  currentUserId: number | null = null;

  togglePostForm() {
    this.mostrarPostForm = !this.mostrarPostForm;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: ChatService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.currentUserId = this.authService.getUserId();
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
        if (!data.userId) {
          console.error('El post no tiene userId');
          return;
        }
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
    if (!this.newComment.trim() || !this.post) return;
    this.postService.addComment(this.post.id, this.newComment).subscribe(
      (comment) => {
        this.comments.push(comment);
        this.newComment = '';
      },
      (error) => console.error('Error al agregar comentario:', error)
    );
  }
  deleteComment(commentId: number, userId: number) {
    if (userId !== this.currentUserId) return; // Evitar eliminación si no es el dueño del comentario
    if (!confirm('¿Seguro que deseas eliminar este comentario?')) return;

    this.postService.deleteComment(commentId).subscribe(
      () => {
        this.comments = this.comments.filter(
          (comment) => comment.id !== commentId
        );
        console.log('Comentario eliminado');
      },
      (error) => console.error('Error al eliminar comentario:', error)
    );
  }

  deletePost(postId: number) {
    if (!this.post || this.post.userId !== this.currentUserId) return; // Verificar si el usuario puede eliminar
    if (!confirm('¿Seguro que deseas eliminar este post?')) return;

    this.postService.deletePost(postId).subscribe(
      () => {
        console.log('Post eliminado');
        this.post = null;
        this.comments = [];
        this.router.navigate(['/foros']);
      },
      (error) => console.error('Error al eliminar el post:', error)
    );
  }
}
