import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {
  appointment:Appointment=new Appointment();
  constructor(private appointmentService:AppointmentService,  private router: Router){}

onsubmit() {
    this.InsertAppointment();
}



InsertAppointment(){
  this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
    console.log(data);
    alert("Appointment booked successfully");
    this.gotoappointmentList();
  });

}
  gotoappointmentList(){
    this.router.navigate(['/appointment']);
  }
 
}

 