import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeetService {
  private meets = new BehaviorSubject<any[]>([]);
  meets$ = this.meets.asObservable();

  addMeet(meet: any) {
    const currentAppointments = this.meets.value;
    this.meets.next([...currentAppointments, meet]);
  }
}
