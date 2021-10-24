import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MedicineService } from '../medicine/medicine.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

  prescriptionForm : FormGroup;

  clientNumber : string | null;
  prescriptionDate: Date = new Date();
  endValidDate: Date = new Date();
  deliveryMethod: number = 0;

  deliveryMethods = [{description:'Afhalen bij apotheek'},{description:'Thuisbezorgen bij patiënt'}];

  constructor(private route: ActivatedRoute,
              private medicineService: MedicineService
             ) { }

  ngOnInit(): void {
    this.clientNumber = this.route.snapshot.paramMap.get("clientNumber");
    this.prescriptionForm = new FormGroup({
      'deliveryMethod': new FormControl(null, Validators.required),
    });
    this.endValidDate.setFullYear(this.endValidDate.getFullYear() + 2);
    for ( let medicine of this.medicineService.getMedicines()) {
       console.log(medicine);
    };
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
