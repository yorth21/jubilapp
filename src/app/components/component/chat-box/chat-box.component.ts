import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.css',
})
export class ChatBoxComponent {
  @Input() tituloChat: string = '';
  @Input() mensajes: string[] = [];
  @Output() mensajeEnviado = new EventEmitter<string>();

  newmessage: string = '';

  enviarMensaje() {
    if (this.newmessage.trim()) {
      this.mensajeEnviado.emit(this.newmessage);
      this.newmessage = ''; // Limpiar el input
    }
  }
}
