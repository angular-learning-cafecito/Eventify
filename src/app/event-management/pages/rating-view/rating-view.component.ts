import {Component, EventEmitter, Output} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {MatButton} from '@angular/material/button';
import {FormRatingComponent} from '../../components/form-rating/form-rating.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-rating-view',
  standalone: true,
  imports: [
    TranslateModule,
    MatButton,
    FormRatingComponent,
    NgIf
  ],
  templateUrl: './rating-view.component.html',
  styleUrl: './rating-view.component.css'
})
export class RatingViewComponent {
  showForm:boolean=false;
  toggleForm(){
    this.showForm = !this.showForm;
  }
  onCloseForm() {
    this.showForm = false;
  }
}
