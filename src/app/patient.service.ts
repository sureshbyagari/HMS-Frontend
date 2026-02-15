import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
   private Baseurl='http://localhost:8080/api/patient';
  constructor(private httpClient: HttpClient) { }
 
  getPatientsList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.Baseurl}/allPatients`);
  }

  CreatePatient(patient:Patient):Observable<object>{
    return this.httpClient.post(`${this.Baseurl}/addPatient`,patient);
  }


  deletepatientByid(id:number):Observable<object>{
    return this.httpClient.delete(`${this.Baseurl}/DeletePatient/${id}`);
  }

  UpdatePatient(id:number,patient:Patient):Observable<Patient>{
    return this.httpClient.put<Patient>(`${this.Baseurl}/UpdatePatient/${id}`,patient);
  }

  getPatientById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.Baseurl}/getPatientById/${id}`);
  }

  
      

  //    createEmployee(employee: Employee): Observable<object> {
  //   return this.httpClient.post(this.baseURL, employee);
  // }

  // getEmployeeById(empId: number): Observable<Employee> {   
  //   return this.httpClient.get<Employee>(`${this.baseURL}/${empId}`);
  // }

  // updateEmployee(empId: number, employee: Employee): Observable<Employee> {
  //   return this.httpClient.put<Employee>(`${this.baseURL}/${empId}`, employee);
  // }


   // getEmployeeList(): Observable<Employee[]> {
   // return this.httpClient.get<Employee[]>(this.baseURL);
}
