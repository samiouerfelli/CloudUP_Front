import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {TimeSlot} from '../../models/MyModels/timeslot';

@Injectable({
  providedIn: 'root'
})
export class TimeSlotService {
  private baseUrl = environment.base_url;

  constructor(private http: HttpClient) { }
  getTimeSlots(professorId: number): Observable<TimeSlot[]> {
    return this.http.get<TimeSlot[]>(`${this.baseUrl}/getslots/${professorId}`);
  }

  // tslint:disable-next-line:typedef
  addTimeSlot(professorId: number, slotData: any) {
    // Note the use of backticks ` and ${} to embed the variable in the URL
    return this.http.post(`${this.baseUrl}/addslots/${professorId}`, slotData);
  }

  getTimeSlotsForDay(professorId: number, day: string): Observable<TimeSlot[]> {
    return this.http.get<TimeSlot[]>(`${this.baseUrl}/getslots/${professorId}/${day}`);
  }


  // tslint:disable-next-line:typedef
  deleteTimeSlot(slotId: number) {
    return this.http.delete(`${this.baseUrl}/deleteTimeSlot/${slotId}`);
  }
  getAvailableTimeSlots(professorId: number): Observable<TimeSlot[]> {
    return this.http.get<TimeSlot[]>(`${this.baseUrl}/api/timeslots/${professorId}`);
  }
}
