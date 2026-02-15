import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  patients:Patient[]=[];
 

  constructor(private patientService:PatientService,private router:Router,private auth:AuthService) {
      if (!this.auth.isLoggedIn()) {
    this.router.navigate(['/home']);
  }
   }
  ngOnInit():void{
    this.getPatientsList();
  }
   
  getPatientsList(){
   this.patientService.getPatientsList().subscribe(data=>{
      this.patients=data;
   });

   
   }

   deletePatient(id:number){
    this.patientService.deletepatientByid(id).subscribe(data=>{
      console.log(data);
      //alert("Patient deleted successfully");
      this.getPatientsList();
    })


  }
  logout() {

  const confirmLogout = confirm("Do you want to logout?");

  if (confirmLogout) {
    this.auth.logout();
    this.router.navigate(['/home']);
  }
}

}
