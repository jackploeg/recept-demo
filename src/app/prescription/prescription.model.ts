import { PrescriptionRow } from './prescription-row/prescription-row.model';

export class Prescription {

  constructor( public prescriptionDate: Date,
               public clientNumber: string,
               public deliveryMethod: string,
               public endDateValid: Date,
               public prescriptionRows: PrescriptionRow[]
             ) {
  };

}
