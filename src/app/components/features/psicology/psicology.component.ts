import { Component } from '@angular/core';
import { HeaderComponent } from '../../../modules/shared/components/header/header.component';
import { FormMeetComponent } from '../../forms/form-meet/form-meet.component';
import { CommonModule } from '@angular/common';
import { MeetingInfoComponent } from '../../component/meeting-info/meeting-info.component';

@Component({
  selector: 'app-psicology',
  standalone: true,
  imports: [
    HeaderComponent,
    FormMeetComponent,
    CommonModule,
    MeetingInfoComponent,
    FormMeetComponent,
  ],
  templateUrl: './psicology.component.html',
  styleUrl: './psicology.component.css',
})
export class PsicologyComponent {
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
