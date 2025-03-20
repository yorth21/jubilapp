import { Component, OnInit } from '@angular/core';
import { Meet, MeetService } from '../../../services/meet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meets-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meets-info.component.html',
  styleUrl: './meets-info.component.css',
})
export class MeetsInfoComponent implements OnInit {
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
    console.log('Lista de médicos generada:', this.doctorList);
  }

  getFilteredMeets() {
    if (this.selectedDoctor === 'All') return this.meets;
    return this.meets.filter(
      (meet) => meet.doctorName.trim() === this.selectedDoctor.trim()
    );
  }
}
