import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

  clientNumber : string | null;
  prescriptionDate: Date = new Date();
  endValidDate: Date = new Date();
  deliveryMethod: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.clientNumber = this.route.snapshot.paramMap.get("clientNumber");
     this.endValidDate.setFullYear(this.endValidDate.getFullYear() + 2);
  }

  printPrescription() {
       let printContents = document.getElementById("recept")!.innerHTML;
       let originalContents = document.body.innerHTML;

       document.body.innerHTML = printContents;

       window.print();

       document.body.innerHTML = originalContents;
       window.location.reload();
  }
}
