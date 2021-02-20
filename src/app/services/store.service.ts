import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StoreModel} from '../models/Store.model';

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  private store =  new Subject<StoreModel>();

  constructor() {}

  saveInStore(){

  }

  getFromStore(){

  }

  deleteFromStore(){

  }
}
