import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  public prescription: Object;

  constructor() { }

  selectRecipe(prescription: Object) {
    this.prescription = prescription;
  }

  getPrescription() {
    return this.prescription;
  }
}
