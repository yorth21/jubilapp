import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../modules/shared/components/header/header.component';
import { ChatBoxComponent } from '../../../component/chat-box/chat-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forums',
  standalone: true,
  imports: [HeaderComponent, ChatBoxComponent, CommonModule],
  templateUrl: './forums.component.html',
  styleUrl: './forums.component.css',
})
export class ForumsComponent {
  selectedForo: string | null = null;
  mensajesPorForo: { [key: string]: string[] } = {
    BAILOTERAPIA: [],
    CAMINATAS: [],
  };

  seleccionarForo(foro: string) {
    this.selectedForo = foro;
  }

  guardarMensaje(foro: string, mensaje: string) {
    if (foro && mensaje.trim()) {
      this.mensajesPorForo[foro].push(mensaje);
    }
  }
}
