import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {
onsubmit() {
this.AddMedicine();
}
  medicines:Medicine=new Medicine();
  constructor(private medicineService: MedicineService, private router: Router) { }

  AddMedicine(){
    this.medicineService.createMedicine(this.medicines).subscribe(data=>{
      console.log(data);
      alert("Medicine added successfully");
      this.gotomedicineList();
    })
  }
  gotomedicineList(){
    this.router.navigate(['/viewmedicine']);

  }

}
