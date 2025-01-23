import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueMembreComponent } from './historique-membre.component';

describe('HistoriqueMembreComponent', () => {
  let component: HistoriqueMembreComponent;
  let fixture: ComponentFixture<HistoriqueMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueMembreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
