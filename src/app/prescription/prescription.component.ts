import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { MedicineService } from '../medicine/medicine.service';
import { PrescriptionService } from '../prescription/prescription.service';
import { Medicine } from '../medicine/medicine.model';
import { Packaging } from '../medicine/packaging.model';
import { Prescription } from '../prescription/prescription.model';
import { PrescriptionRow } from '../prescription/prescription-row/prescription-row.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

  prescriptionForm : FormGroup;

  medicines: Medicine[];
  packagings: Packaging[];

  deliveryMethods = [{description:'Afhalen bij apotheek'},{description:'Thuisbezorgen bij patiënt'}];

  constructor(private route: ActivatedRoute,
              private medicineService: MedicineService,
              private prescriptionService: PrescriptionService
             ) { }

  ngOnInit(): void {
    //this.clientNumber = this.route.snapshot.paramMap.get("clientNumber")!;
    this.medicines = this.medicineService.getMedicines();
    this.initForm();
  }

  initForm() {
    let clientNumber = this.route.snapshot.paramMap.get("clientNumber")!;
    let prescriptionDate= new Date();
    let endDateValid = new Date();
    endDateValid.setFullYear(endDateValid.getFullYear() + 2);
    let deliveryMethod = '';
    let prescriptionRows = new FormArray([]);

    this.prescriptionForm = new FormGroup({
      'clientNumber': new FormControl(clientNumber),
      'prescriptionDate': new FormControl(formatDate(prescriptionDate, 'dd-MM-yyyy', 'en')),
      'endDateValid': new FormControl(formatDate(endDateValid, 'dd-MM-yyyy', 'en')),
      'deliveryMethod': new FormControl(null, Validators.required),
      'prescriptionRows': prescriptionRows
      });
  }

  get prescriptionRowsCtrls() { // a getter!
    return (<FormArray>this.prescriptionForm.get('prescriptionRows')).controls;
  }

  addNewRow() {
    (<FormArray>this.prescriptionForm.get('prescriptionRows')).push(
      new FormGroup({
        'medicine': new FormControl('', Validators.required),
        'packaging': new FormControl(''),
        'number': new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'description': new FormControl('')
      })
    );
  }

  deletePrescriptionRow(index: number) {
    (<FormArray>this.prescriptionForm.get('prescriptionRows')).removeAt(index);
  }

  medicineChanged(index: number) {
    console.log('medicine changed');
    console.log(event);
    console.log((<FormArray>this.prescriptionForm.get('prescriptionRows')).controls[index].get('medicine')!.value);
    let selectedMedicine = (<FormArray>this.prescriptionForm.get('prescriptionRows')).controls[index].get('medicine')!.value;

      for (let medicine of this.medicines) {
        if (selectedMedicine === medicine.description) {
          this.packagings = medicine.availablePackaging;
          console.log(this.packagings);
        }
     }
  }

  formatPackaging(packaging: Packaging) : string {
    switch(packaging.unit) {
      case 'stuks': {
        return ('stuks');
      }
      case 'strip': {
        return ('' + packaging.quantity + ' strips van ' + packaging.quantityPerUnit + ' tabletten');
      }
      case 'fles': {
        return ('fles van ' + packaging.quantityPerUnit + ' milliliter');
      }
      default: {
        return ('stuks');
      }
    }
  }

  printPrescription() {
    // TODO navigate to printContents
    console.log(this.prescriptionForm);
    this.prescriptionService.selectRecipe(this.prescriptionForm.value);
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
