import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../../../services/chat.service';
import { FormsModule } from '@angular/forms';
import { PostComponent } from '../../../component/post/post.component';

@Component({
  selector: 'app-forums',
  standalone: true,
  imports: [CommonModule, FormsModule, PostComponent],
  templateUrl: './forums.component.html',
  styleUrl: './forums.component.css',
})
export class ForumsComponent implements OnInit {
  posts: { title: string; content: string }[] = [];

  constructor(private postService: ChatService) {}

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
    this.postService.addPost(nuevoPost).subscribe(
      (post) => {
        this.posts.unshift(post); // Agregar el post al inicio de la lista
      },
      (error) => {
        console.error('Error al agregar post:', error);
      }
    );
  }
}
