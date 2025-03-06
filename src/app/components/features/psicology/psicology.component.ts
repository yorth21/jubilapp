import { Component } from '@angular/core';
import { FormMeetComponent } from '../../forms/form-meet/form-meet.component';
import { CommonModule } from '@angular/common';
import { MeetingInfoComponent } from '../../component/meeting-info/meeting-info.component';

@Component({
  selector: 'app-psicology',
  standalone: true,
  imports: [
    FormMeetComponent,
    CommonModule,
    MeetingInfoComponent,
    FormMeetComponent,
  ],
  templateUrl: './psicology.component.html',
  styleUrl: './psicology.component.css',
})
export class PsicologyComponent {
  isInverted = false;
  selectedForo: string | null = null;
  mensajesPorForo: { [key: string]: string[] } = {
    obtenerCita: [],
    misCitas: [],
  };

  seleccionarForo(foro: string) {
    this.selectedForo = foro;
    this.isInverted = !this.isInverted;
  }

  guardarMensaje(foro: string, mensaje: string) {
    if (foro && mensaje.trim()) {
      this.mensajesPorForo[foro].push(mensaje);
    }
  }
}
