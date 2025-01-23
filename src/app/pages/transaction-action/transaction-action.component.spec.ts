import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionActionComponent } from './transaction-action.component';

describe('TransactionActionComponent', () => {
  let component: TransactionActionComponent;
  let fixture: ComponentFixture<TransactionActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
