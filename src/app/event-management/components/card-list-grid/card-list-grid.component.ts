import {Component, Input} from '@angular/core';
import {MatNavList} from '@angular/material/list';
import {EventEntity} from '../../models/event.entity';
import {EventSummaryComponent} from '../event-summary/event-summary.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-card-list-grid',
  standalone: true,
  imports: [
    MatNavList,
    EventSummaryComponent,
    TranslateModule
  ],
  templateUrl: './card-list-grid.component.html',
  styleUrl: './card-list-grid.component.css'
})
export class CardListGridComponent {
  @Input() events: Array<EventEntity> = [];
}
