import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service.service';
import {Rating} from '../models/ratings.entity';

@Injectable({
  providedIn: 'root'
})
export class RatingsService extends BaseService<Rating>{

  constructor() {
    super();
    this.resourceEndpoint = '/ratings';
  }
}
