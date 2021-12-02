import { Medicine } from '../../medicine/medicine.model'
import { Packaging } from '../../medicine/packaging.model';

export class PrescriptionRow {

  constructor(public medicine: Medicine | null,
    public packaging: Packaging | null,
    public quantity: number | null,
    public instructions: string | null
  ) {
  };
}
