import { Component, Input, OnInit } from '@angular/core';
import { MeetService } from '../../../services/meet.service';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-meeting-info',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './meeting-info.component.html',
  styleUrl: './meeting-info.component.css',
})
export class MeetingInfoComponent implements OnInit {
  userIdentification!: string;
  meets: any[] = [];

  constructor(
    private meetService: MeetService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getUserData().subscribe((user) => {
      if (user && user.identification) {
        this.userIdentification = user.identification;
        this.loadMeets();
      }
    });
  }

  private loadMeets() {
    if (!this.userIdentification) {
      console.error('User identification is not defined');
      return;
    }

    this.meetService.getMeetsByUser(this.userIdentification).subscribe(
      (data) => {
        this.meets = data;
      },
      (error) => {
        console.error('Error al obtener las citas:', error);
      }
    );
  }

  confirmDelete(meetId: number, index: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.meetService.deleteMeet(meetId).subscribe(
          () => {
            this.meets.splice(index, 1);
            Swal.fire({
              icon: 'success',
              title: 'Eliminado',
              text: 'Cita eliminada correctamente',
              timer: 2000,
              showConfirmButton: false,
            });
          },
          (error) => {
            console.error('Error al eliminar la cita:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo eliminar la cita',
            });
          }
        );
      }
    });
  }
}
