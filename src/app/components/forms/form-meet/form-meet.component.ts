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
      img: 'https://images.pexels.com/photos/4098274/pexels-photo-4098274.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Dr. Carlos Pérez',
      img: 'https://images.pexels.com/photos/4100653/pexels-photo-4100653.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    { id: 3, name: 'Dra. Laura Gómez', img: 'laura.jpg' },
  ];

  constructor(private fb: FormBuilder, private meetService: MeetService) {
    this.meetForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', Validators.required],
      doctor: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.meetForm.valid) {
      const selectedDoctor = this.doctors.find(
        (d) => d.id == this.meetForm.value.doctor
      );
      const meet = {
        ...this.meetForm.value,
        doctorName: selectedDoctor?.name,
        doctorImg: selectedDoctor?.img,
        meetLink: 'https://meet.google.com/xyz-123',
      };

      this.meetService.addMeet(meet);
      console.log('Cita guardada:', meet);
    } else {
      console.log('Formulario inválido');
    }
  }
}
