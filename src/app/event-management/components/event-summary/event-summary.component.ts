import {Component, inject, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from '@angular/material/card';
import {TranslateModule} from '@ngx-translate/core';
import {EventEntity} from '../../models/event.entity';
import {AttendeesService} from '../../services/attendees.service';
import {Attendee} from '../../models/attendee.entity';
import {RatingsService} from '../../services/ratings.service';

@Component({
  selector: 'app-event-summary',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    TranslateModule
  ],
  templateUrl: './event-summary.component.html',
  styleUrl: './event-summary.component.css'
})
export class EventSummaryComponent {
  @Input() event!: EventEntity;
  private attendeeService : AttendeesService = inject(AttendeesService);
  private ratingsService : RatingsService = inject(RatingsService);
  constructor() {
    this.getEventAttendees();
  }
  getEventAttendees(): void {
    this.ratingsService.getAll().subscribe((data: any) => {
      const filteredRating = data.filter((ratings:any) => ratings.eventId === this.event.id);
      filteredRating.forEach((ratings: any) => {
        console.log(ratings);
      })

      if (filteredRating.length > 0 && this.event) {
        this.event.averageRating = filteredRating.reduce((sum: number, ratings: any) => sum + ratings.rating, 0) / filteredRating.length;
      } else {
        this.event.averageRating = 0;
      }

    });

    this.attendeeService.getAll().subscribe((data: any) => {
      const filteredAttendees = data.filter((attendee: any) => attendee.eventId === this.event.id && attendee.checkedInAt!==null);

      filteredAttendees.forEach((attendee: any) => {
        console.log(attendee);
      });

      this.event.checkedIndAttendees = filteredAttendees.length;


    });
  }


}
