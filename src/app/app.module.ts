import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbIconModule, NbCardModule, NbListModule, NbButtonModule,
         NbSelectModule, NbRadioModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { ClientsComponent } from './clients/clients.component';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { ClientDetailsComponent } from './clients/client-details/client-details.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { ClientRowComponent } from './clients/client-list/client-row/client-row.component';
import { PrintComponent } from './prescription/print/print.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientListComponent,
    ClientDetailsComponent,
    PrescriptionComponent,
    ClientRowComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbSelectModule,
    NbRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
