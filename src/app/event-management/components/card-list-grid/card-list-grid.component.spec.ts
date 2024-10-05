import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListGridComponent } from './card-list-grid.component';

describe('CardListGridComponent', () => {
  let component: CardListGridComponent;
  let fixture: ComponentFixture<CardListGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardListGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
