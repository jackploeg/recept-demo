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
  newRowForm: FormGroup;

  clientNumber : string;
  prescriptionDate: Date = new Date();
  endValidDate: Date = new Date();
  deliveryMethod: number = 0;

  prescription : Prescription;
  newPrescriptionRow : PrescriptionRow;

  medicines: Medicine[];

  deliveryMethods = [{description:'Afhalen bij apotheek'},{description:'Thuisbezorgen bij patiënt'}];

  constructor(private route: ActivatedRoute,
              private medicineService: MedicineService
             ) { }

  ngOnInit(): void {
    this.clientNumber = this.route.snapshot.paramMap.get("clientNumber")!;

    this.prescriptionForm = new FormGroup({
      'deliveryMethod': new FormControl(null, Validators.required)
    });

    this.newRowForm = new FormGroup({
      'medicine': new FormControl(null, Validators.required)
    });

    this.endValidDate.setFullYear(this.endValidDate.getFullYear() + 2);

    this.medicines = this.medicineService.getMedicines();

    this.newPrescriptionRow = new PrescriptionRow(
        null, null, null, null
    );

    this.prescription = new Prescription( this.prescriptionDate,
                                     this.clientNumber,
                                     []
                                   );
  }

  addNewRow() {
    console.log(this.newRowForm.value);
    // TODO construct new medicine + prescriptionRow
    this.prescription.addRow(this.newRowForm.value);
    this.newRowForm = new FormGroup({
      'medicine': new FormControl(null, Validators.required)
    });
  }
  newRowComplete() : boolean {
    return this.newPrescriptionRow.medicine != null;
  }

  printPrescription() {
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
