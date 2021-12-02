import { Packaging } from './packaging.model';

export class Medicine {

  constructor(public description: string,
    public availablePackaging: Packaging[]) {
  };
}
