import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {
onsubmit(){
  this.AddPatient();
}
patient:Patient=new Patient();
constructor(private patientService: PatientService,private router:Router){}

AddPatient(){
  this.patientService.CreatePatient(this.patient).subscribe(data=>{
    console.log(data);
    alert("Patient added successfully");
    this.gotodocdash();

  });
 
}
gotodocdash(){
  this.router.navigate(['/docdash']);
}

 

}
