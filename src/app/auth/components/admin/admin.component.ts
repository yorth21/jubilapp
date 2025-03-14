import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Appointment {
  id: number;
  userId: number;
  userNames: string;
  date: string;
  doctorName: string;
  description: string;
  createdAt: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  doctorId: number | null = null;
  doctorName: string = '';

  appointments: Appointment[] = [
    {
      id: 1,
      userId: 1,
      userNames: 'John Doe',
      date: '2021-09-23T00:00:00.000Z',
      doctorName: 'Dr. John Doe',
      description: 'Meet for a checkup',
      createdAt: '2021-09-23T00:00:00.000Z',
    },
  ];

  updateDoctor() {
    console.log(`Doctor ID: ${this.doctorId}, Doctor Name: ${this.doctorName}`);
  }
}
