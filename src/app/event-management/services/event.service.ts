import { Injectable } from '@angular/core';
import {EventEntity} from '../models/event.entity';
import {BaseService} from '../../shared/services/base.service.service';

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService<EventEntity>{

  constructor() {
    super();
    this.resourceEndpoint = '/events';
  }
}
