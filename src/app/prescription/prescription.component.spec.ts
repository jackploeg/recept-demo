import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { PrescriptionComponent } from './prescription.component';
import { PrescriptionService } from './prescription.service';

fdescribe('PrescriptionComponent', () => {
  let component: PrescriptionComponent;
  let fixture: ComponentFixture<PrescriptionComponent>;
  let prescriptionService: PrescriptionService;
  let router;
  let route;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrescriptionComponent],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);

    const spyRoute = spyOn(route.snapshot.paramMap, 'get')
    spyRoute.and.returnValue('12345')

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
