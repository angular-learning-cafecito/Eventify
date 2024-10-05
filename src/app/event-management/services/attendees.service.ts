import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service.service';
import {Attendee} from '../models/attendee.entity';

@Injectable({
  providedIn: 'root'
})
export class AttendeesService extends BaseService<Attendee>{

  constructor() {
    super();
    this.resourceEndpoint = '/attendees';
  }
}
