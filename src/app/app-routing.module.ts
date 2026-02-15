import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import path from 'path/win32';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { DoclogComponent } from './doclog/doclog.component';
import { AdmlogComponent } from './admlog/admlog.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { DoctorGuard } from './doctor.guard';
import { LoginGuard } from './login.guard';



const routes: Routes = [

  // Public
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },

  // Login pages (public)
 { path: "doclogin", component: DoclogComponent, canActivate: [LoginGuard] },
{ path: "admlog", component: AdmlogComponent, canActivate: [LoginGuard] },

 { path: "admindash", component: AdmindashComponent, canActivate: [AuthGuard, AdminGuard] },

{ path: "docdash", component: DocdashComponent, canActivate: [AuthGuard, DoctorGuard] },


  // Other protected pages (because doctor/admin only should access)
// Doctor only
{ path: "docdash", component: DocdashComponent, canActivate: [AuthGuard, DoctorGuard] },
{ path: "createpatient", component: CreatePatientComponent, canActivate: [AuthGuard, DoctorGuard] },
{ path: "viewmedicine", component: MedicinelistComponent, canActivate: [AuthGuard, DoctorGuard] },
{ path: "updatepatient/:id", component: UpdatePatientComponent, canActivate: [AuthGuard, DoctorGuard] },
{path:"createmedicine", component: CreateMedicineComponent, canActivate: [AuthGuard, DoctorGuard]},


// Admin only
{ path: "admindash", component: AdmindashComponent, canActivate: [AuthGuard, AdminGuard] },
{ path: "appointment", component: AppointmentComponent, canActivate: [AuthGuard, AdminGuard] },
{ path: "createappointment", component: CreateAppointmentComponent },







];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
