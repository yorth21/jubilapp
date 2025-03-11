import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  title: string = '';
  content: string = '';

  @Output() postCreado = new EventEmitter<{ title: string; content: string }>();

  crearPost() {
    if (this.title.trim() && this.content.trim()) {
      this.postCreado.emit({ title: this.title, content: this.content });
      this.title = '';
      this.content = '';
    }
  }
}
