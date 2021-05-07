import { Injectable } from '@angular/core';
import Wine from '../shared/wine';
import { WINES } from '../shared/wines';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor() { }

  getWines(): Wine[] {
    return WINES;
  }
}
