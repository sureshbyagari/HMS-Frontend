import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = 'https://hms-backend-1-867p.onrender.com/api/Appointment';

  constructor(private httpClient: HttpClient) {}

  // GET all appointments
  getAppointmentList(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(
      `${this.baseUrl}/allAppointments`
    );
  }

  // CREATE appointment
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(
      `${this.baseUrl}/CreateAppointment`,
      appointment
    );
  }

  deleteAppointmentById(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/DeleteAppointment/${id}`);
  }


}


  // createAppointment(appointment:Appointment):Observable<object>{
  //   return this.httpClient.post(`${this.Baseurl}`,appointment);
  // }




  // createEmployee(employee: Employee): Observable<object> {
  //   return this.httpClient.post(this.baseURL, employee);
  

