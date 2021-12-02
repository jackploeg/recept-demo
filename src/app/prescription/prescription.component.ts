import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Subscription } from 'rxjs';
import { MedicineService } from '../medicine/medicine.service';
import { PrescriptionService } from '../prescription/prescription.service';
import { Medicine } from '../medicine/medicine.model';
import { Packaging } from '../medicine/packaging.model';
import { Prescription } from '../prescription/prescription.model';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit, OnDestroy {

  prescriptionForm: FormGroup;
  medicineSubscription: Subscription;

  medicines: Medicine[];
  packagings: Packaging[][] = [[]];

  deliveryMethods = [{ description: 'Afhalen bij apotheek' }, { description: 'Thuisbezorgen bij patiënt' }];

  constructor(private route: ActivatedRoute,
    private medicineService: MedicineService,
    private prescriptionService: PrescriptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.medicineSubscription = this.medicineService.getMedicines()
      .subscribe(medicines => {
        this.medicines = medicines;
      }
      );
    this.initForm();
  }

  ngOnDestroy(): void {
    if (this.medicineSubscription) {
      this.medicineSubscription.unsubscribe();
    }
  }

  initForm() {
    let clientNumber = this.route.snapshot.paramMap.get("clientNumber")!;
    let prescriptionDate = new Date();
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

  get prescriptionRowsCtrls() {
    return (<FormArray>this.prescriptionForm.get('prescriptionRows')).controls;
  }

  addNewRow() {
    (<FormArray>this.prescriptionForm.get('prescriptionRows')).push(
      new FormGroup({
        'medicine': new FormControl('', Validators.required),
        'packaging': new FormControl(''),
        'quantity': new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'instructions': new FormControl('')
      })
    );
  }

  deletePrescriptionRow(index: number) {
    (<FormArray>this.prescriptionForm.get('prescriptionRows')).removeAt(index);
    this.packagings.splice(index, 1);
  }

  medicineChanged(index: number) {
    let selectedMedicine = (<FormArray>this.prescriptionForm.get('prescriptionRows')).controls[index].get('medicine')!.value;

    for (let medicine of this.medicines) {
      if (selectedMedicine === medicine.description) {
        this.packagings[index] = medicine.availablePackaging;
      }
    }
  }

  getPackagings(index: number) {
    return this.packagings.length >= index ? this.packagings[index] : [];
  }

  formatPackaging(packaging: Packaging): string {
    switch (packaging.unit) {
      case 'stuks': {
        return ('stuks');
      }
      case 'poeder': {
        return ('doos met ' + packaging.quantity + ' poeders ');
      }
      case 'strip': {
        return ('doos met ' + packaging.quantity + ' strips van ' + packaging.quantityPerUnit + ' ' + packaging.subUnit);
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
    this.prescriptionService.selectRecipe(this.prescriptionForm.value);
    this.router.navigate(['print']);
  }
}
