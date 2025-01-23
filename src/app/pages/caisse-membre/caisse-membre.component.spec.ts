import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaisseMembreComponent } from './caisse-membre.component';

describe('CaisseMembreComponent', () => {
  let component: CaisseMembreComponent;
  let fixture: ComponentFixture<CaisseMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaisseMembreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaisseMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
