import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';


@Injectable({
  providedIn: 'root'
})
export class MedicineService {


  constructor(private httpClient: HttpClient) { }
  private baseurl="https://hms-backend-1-867p.onrender.com/api/Medicine";

  getmedicineList():Observable<Medicine[]>{ {
    return this.httpClient.get<Medicine[]>(`${this.baseurl}/allMedicines`);
    
    }
    
  }

  createMedicine(medicine:Medicine):Observable<object>{
    return this.httpClient.post(`${this.baseurl}/CreateMedicine`,medicine);
  }
}
