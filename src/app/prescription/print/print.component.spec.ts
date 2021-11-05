import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintComponent } from './print.component';
import { PrescriptionService } from '../prescription.service';

describe('PrintComponent', () => {
  let component: PrintComponent;
  let fixture: ComponentFixture<PrintComponent>;
  let prescriptionService : PrescriptionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintComponent);
    component = fixture.componentInstance;

    prescriptionService = TestBed.get(PrescriptionService);

    spyOn(prescriptionService, 'getPrescription').and.returnValue({
      prescriptionDate: '20211101',
      clientNumber: '12345',
      deliveryMethod: 'Ophalen',
      endDateValid: '20991231',
      prescriptionRows: []
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
