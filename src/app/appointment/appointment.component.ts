import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  
  appointment:Appointment[]=[];
  constructor(private appointmentService:AppointmentService){ }
  ngOnInit():void{
    this.getAppointment();
  }
  getAppointment(){
    this.appointmentService.getAppointmentList().subscribe(data=>{
      this.appointment=data;
    });
  }
     deleteAppointment(id:number){
      this.appointmentService.deleteAppointmentById(id).subscribe(data=>{
        console.log(data);
        alert("Appointment deleted succcessfully");
        this.getAppointment();
      });
  

  }

}

