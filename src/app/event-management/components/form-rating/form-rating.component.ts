import {Component, EventEmitter, inject, Output, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {RatingsService} from '../../services/ratings.service';
import {Rating} from '../../models/ratings.entity';
import {AttendeesService} from '../../services/attendees.service';
import {TranslateModule} from '@ngx-translate/core';
import {NgIf} from '@angular/common';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-form-rating',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule,
    NgIf,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel
  ],
  templateUrl: './form-rating.component.html',
  styleUrl: './form-rating.component.css'
})
export class FormRatingComponent {
  ratings!: Rating;
  ticketIdentifier!: string;
  isTicketValid:boolean = false;
  @ViewChild('ratingForm', { static: false }) ratingForm!: NgForm;
  @Output() closeForm: EventEmitter<void> = new EventEmitter();
  ratingService: RatingsService = inject(RatingsService);
  attendeeService: AttendeesService = inject(AttendeesService);

  constructor() {
    this.ratings=new Rating({});
  }
  ticketIsValid() {
    if(this.ticketIdentifier) {
      this.attendeeService.getAll().subscribe((response:any)=>{
        if(this.ticketIdentifier){
          for(const element of response){
            console.log(this.ticketIdentifier, element.ticketIdentifier);
            if(this.ticketIdentifier === element.ticketIdentifier){
              this.isTicketValid = true;
              break;
            }
          }
          console.log(this.isTicketValid)
        }
      })
    }else{
      console.log('Ingresar ticket identificador');
    }
  }
  onSubmit(){
    this.ticketIsValid();
    if(this.ratingForm.form.valid){
      const currentDate = new Date();
      const isoDate = currentDate.toISOString();
      this.ratings.ratedAt=currentDate.toString();
      this.ratingService.create(this.ratings).subscribe((response:any)=>{
        console.log('rating saved',response);
      })
    }
    this.formReset();
  }
  formReset(){
    this.ratingForm.reset();
    this.ratings = new Rating({});
    this.isTicketValid=false;
  }
  onCancel(){
    this.formReset();
    this.closeForm.emit();
  }

}
