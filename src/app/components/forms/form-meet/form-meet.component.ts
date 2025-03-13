import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MeetService } from '../../../services/meet.service';

@Component({
  selector: 'app-form-meet',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-meet.component.html',
  styleUrl: './form-meet.component.css',
})
export class FormMeetComponent {
  meetForm: FormGroup;

  doctors = [
    {
      id: 1,
      name: 'Dra. Ana Martínez',
    },
    {
      id: 2,
      name: 'Dr. Carlos Pérez',
    },
    { id: 3, name: 'Dra. Laura Gómez' },
  ];

  constructor(private fb: FormBuilder, private meetService: MeetService) {
    this.meetForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', Validators.required],
      doctor: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.meetForm.valid) {
      const selectedDoctor = this.doctors.find(
        (d) => d.id == this.meetForm.value.doctor
      );
      const dateString = new Date(this.meetForm.value.date).toISOString();

      const meetData = {
        date: dateString,
        doctorName: selectedDoctor?.name,
        description: this.meetForm.value.description,
      };

      this.meetService.addMeet(meetData).subscribe(
        (response) => {
          alert('Cita agendada con éxito ');
          this.meetForm.reset();
        },
        (error) => {
          console.error('Error al agendar cita:', error);
          alert('❌ Error al guardar la cita. Intente de nuevo.');
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
