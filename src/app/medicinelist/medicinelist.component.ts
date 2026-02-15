import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from 'express';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrl: './medicinelist.component.css'
})
export class MedicinelistComponent {
  medicines:Medicine[]=[];
  constructor(private medicineService: MedicineService){}

    ngOnInit(): void {
    this.medicineList();
  }
  medicineList(){
    this.medicineService.getmedicineList().subscribe(data=>{
      this.medicines=data;
    });
  }
 

}
