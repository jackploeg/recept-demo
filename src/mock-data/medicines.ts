import { Medicine } from '../app/medicine/medicine.model';
import { Packaging } from '../app/medicine/packaging.model';

export const MEDICINES: Medicine[] = [
  { description: "Paracetamol 500mg",
    availablePackaging: [
      { quantity: 5,
        unit: "strip",
        quantityPerUnit: 10,
        subUnit: "tabletten"
      },
      { quantity: 20,
        unit: "poeder",
        quantityPerUnit: 1,
        subUnit: "poeder"
      },
    ]
  },
  { description: "Paracetamol 250mg",
    availablePackaging: [
      { quantity: 5,
        unit: "strip",
        quantityPerUnit: 10,
        subUnit: "tabletten"
      },
      { quantity: 3,
        unit: "strip",
        quantityPerUnit: 5,
        subUnit: "zetpillen"
      },
    ]
  },
  { description: "Hoestdrank broomhexine hcl 4mg/5ml",
    availablePackaging: [
      { quantity: 1,
        unit: "fles",
        quantityPerUnit: 100,
        subUnit: "milliliter"
      }
    ]
  },
];
