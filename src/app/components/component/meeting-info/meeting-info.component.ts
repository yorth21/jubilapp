import { Component, Input, OnInit } from '@angular/core';
import { MeetService } from '../../../services/meet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meeting-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meeting-info.component.html',
  styleUrl: './meeting-info.component.css',
})
export class MeetingInfoComponent implements OnInit {
  meets: any[] = [];

  constructor(private meetService: MeetService) {}

  ngOnInit() {
    this.meetService.meets$.subscribe((data) => {
      this.meets = data;
    });
  }
}
