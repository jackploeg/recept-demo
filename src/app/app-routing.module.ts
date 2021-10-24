import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { PrescriptionComponent } from './prescription/prescription.component';

const routes: Routes = [
  { path: '', component: ClientsComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'prescription/:clientNumber', component: PrescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
