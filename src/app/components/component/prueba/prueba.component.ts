import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meet, MeetService } from '../../../services/meet.service';
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
  selector: 'app-prueba',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prueba.component.html',
  styleUrl: './prueba.component.css',
})
export class PruebaComponent implements OnInit {
  doctorList: string[] = ['All'];
  meets: Meet[] = [];
  selectedDoctor: string = 'All';

  constructor(private meetService: MeetService) {}

  ngOnInit() {
    this.loadMeets();
  }

  loadMeets() {
    this.meetService.getMeets().subscribe({
      next: (data) => {
        this.meets = data;
        this.generateDoctorList();
        console.log('citas', this.meets);
      },
      error: (err) => {
        console.error('Error loading meets:', err);
      },
    });
  }
  generateDoctorList() {
    const uniqueDoctors = new Set(
      this.meets.map((meet) => meet.doctorName.trim())
    );
    this.doctorList = ['All', ...Array.from(uniqueDoctors)];
    console.log('Lista de médicos generada:', this.doctorList); // Verificar en la consola
  }

  getFilteredMeets() {
    if (this.selectedDoctor === 'All') return this.meets;
    return this.meets.filter(
      (meet) => meet.doctorName.trim() === this.selectedDoctor.trim()
    );
  }
}
