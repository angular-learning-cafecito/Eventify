import {Component, inject, OnInit} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {CardListGridComponent} from '../../../event-management/components/card-list-grid/card-list-grid.component';
import {EventEntity} from '../../../event-management/models/event.entity';
import {EventService} from '../../../event-management/services/event.service';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    TranslateModule,
    CardListGridComponent
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent implements OnInit {
  events: Array<EventEntity> = [];
  private eventService: EventService = inject(EventService);

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getAll().subscribe((response: any) => {
      response.forEach((event: any) => {
        let registeredEvent = new EventEntity({
          id: event.id,
          name: event.name,
          description: event.description,
          scheduledAt: event.scheduledAt,
        });
        this.events.push(registeredEvent);
      });
      console.log(this.events);
    })
  }
}
