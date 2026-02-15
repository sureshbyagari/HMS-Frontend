import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';


@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {
  id:number=0;
  patient:Patient=new Patient();

  constructor(private patientService:PatientService,private route:ActivatedRoute, private router:Router){}
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient=data;

    })
}
onSubmit(){
  this.patientService.UpdatePatient(this.id,this.patient).subscribe(data=>{
    console.log(data);
    alert("updated successfully;")
    this.gotodocdash();
    
});
}
gotodocdash(){
  this.router.navigate(['/docdash']);
}
}
