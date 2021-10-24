import { PrescriptionRow } from './prescription-row/prescription-row.model';

export class Prescription {

  constructor( public date: Date,
               public clientNumber: string,
               public rows: PrescriptionRow[]
             ) {
  };

  addRow(row : PrescriptionRow) {
    this.rows.push(row);
  }
}
