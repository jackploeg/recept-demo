import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule, NbIconModule, NbCardModule, NbListModule, NbButtonModule,
         NbSelectModule, NbRadioModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NbLayoutModule,
        NbThemeModule.forRoot({ name: 'default' }),
        NbEvaIconsModule,
        NbIconModule,
        NbInputModule,
        NbCardModule,
        NbListModule,
        NbButtonModule,
        NbSelectModule,
        NbRadioModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'recept-demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('recept-demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('nb-layout-header').textContent).toContain('Patiënten administratie');
  });
});
