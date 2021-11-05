import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../prescription.service';
import { Prescription } from '../prescription.model';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  prescription : Prescription;

  constructor( private prescriptionService : PrescriptionService) { }

  ngOnInit(): void {
    this.prescription = <Prescription>this.prescriptionService.getPrescription();
    console.log(this.prescription);
  }


}
