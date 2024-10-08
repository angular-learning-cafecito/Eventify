import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingViewComponent } from './rating-view.component';

describe('RatingViewComponent', () => {
  let component: RatingViewComponent;
  let fixture: ComponentFixture<RatingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
