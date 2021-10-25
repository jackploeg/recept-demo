import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MedicineService } from '../medicine/medicine.service';
import { Medicine } from '../medicine/medicine.model';
import { Prescription } from '../prescription/prescription.model';
import { PrescriptionRow } from '../prescription/prescription-row/prescription-row.model';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

  prescriptionForm : FormGroup;
  //newRowForm: FormGroup;

  clientNumber : string = '';
  prescriptionDate: Date = new Date();
  endDateValid: Date = new Date();
  deliveryMethod: string = '';

  medicines: Medicine[];

  deliveryMethods = [{description:'Afhalen bij apotheek'},{description:'Thuisbezorgen bij patiënt'}];

  constructor(private route: ActivatedRoute,
              private medicineService: MedicineService
             ) { }

  ngOnInit(): void {
    this.clientNumber = this.route.snapshot.paramMap.get("clientNumber")!;
    this.medicines = this.medicineService.getMedicines();
    this.initForm();
  }

  initForm() {
      this.prescriptionForm = new FormGroup({
        'clientNumber': new FormControl(this.clientNumber),
        'prescriptionDate': new FormControl(this.prescriptionDate),
        'endDateValid': new FormControl(this.endDateValid),
        'deliveryMethod': new FormControl(null, Validators.required)
      });
      this.endDateValid.setFullYear(this.endDateValid.getFullYear() + 2);
  }

  printPrescription() {
    // TODO navigate to printContents
    console.log(this.prescriptionForm);
//        let printContents = document.getElementById("recept")!.innerHTML;
//        let originalContents = document.body.innerHTML;
//
//        document.body.innerHTML = printContents;
//
//        window.print();
//
//        document.body.innerHTML = originalContents;
//        window.location.reload();
  }
}
