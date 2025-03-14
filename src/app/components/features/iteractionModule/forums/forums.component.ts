import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { PostComponent } from '../../../component/post/post.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forums',
  standalone: true,
  imports: [CommonModule, FormsModule, PostComponent],
  templateUrl: './forums.component.html',
  styleUrl: './forums.component.css',
})
export class ForumsComponent implements OnInit {
  mostrarPostForm = false;
  posts: { id: number; title: string; content: string }[] = [];

  togglePostForm() {
    this.mostrarPostForm = !this.mostrarPostForm;
  }

  constructor(private postService: ChatService, private router: Router) {}

  ngOnInit() {
    this.cargarPosts();
  }

  cargarPosts() {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error al obtener posts:', error);
      }
    );
  }

  agregarPost(nuevoPost: { title: string; content: string }) {
    const userId = this.obtenerUserId(); // 🔹 Asegúrate de obtener el userId
    this.postService.addPost({ ...nuevoPost, userId }).subscribe(
      (postConId) => {
        this.posts.unshift(postConId);
      },
      (error) => {
        console.error('Error al agregar post:', error);
      }
    );
  }
  obtenerUserId(): number {
    // Aquí puedes obtener el ID del usuario desde un servicio de autenticación
    return 1; // 🔹 Temporalmente usa un valor fijo
  }

  goToPsot(id: number) {
    this.router.navigate(['/post', id]);
  }
}
