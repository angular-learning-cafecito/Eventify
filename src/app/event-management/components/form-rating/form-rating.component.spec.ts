import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRatingComponent } from './form-rating.component';

describe('FormRatingComponent', () => {
  let component: FormRatingComponent;
  let fixture: ComponentFixture<FormRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
