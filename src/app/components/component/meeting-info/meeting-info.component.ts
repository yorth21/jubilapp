import { Component, Input, OnInit } from '@angular/core';
import { MeetService } from '../../../services/meet.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-meeting-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meeting-info.component.html',
  styleUrl: './meeting-info.component.css',
})
export class MeetingInfoComponent implements OnInit {
  userId!: number;
  meets: any[] = [];

  constructor(
    private meetService: MeetService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getUserData().subscribe((user) => {
      if (user && user.id) {
        this.userId = user.id;
        this.loadMeets();
      }
    });
  }

  private loadMeets() {
    this.meetService.getMeetsByUser(this.userId).subscribe(
      (data) => {
        this.meets = data;
      },
      (error) => {
        console.error('Error al obtener las citas:', error);
      }
    );
  }
}
