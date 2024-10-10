import { Injectable } from '@angular/core';
import { CartographiMap } from '../models/map';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  maps: CartographiMap[] = [];
  constructor() { }

  addMap(map: CartographiMap): void {
    this.maps.push(map);
  }

}
