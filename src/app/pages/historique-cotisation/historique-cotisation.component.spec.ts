import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueCotisationComponent } from './historique-cotisation.component';

describe('HistoriqueCotisationComponent', () => {
  let component: HistoriqueCotisationComponent;
  let fixture: ComponentFixture<HistoriqueCotisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueCotisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueCotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
