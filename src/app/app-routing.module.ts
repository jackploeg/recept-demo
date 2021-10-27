import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PrintComponent } from './prescription/print/print.component';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'prescription/:clientNumber', component: PrescriptionComponent },
  { path: 'print', component: PrintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
