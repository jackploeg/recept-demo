import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Medicine } from './medicine.model';
import { Packaging } from './packaging.model';
import { MEDICINES } from '../../mock-data/medicines';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor() { }

  getMedicines(): Observable<Medicine[]> {
    return of(MEDICINES)
  }
}
