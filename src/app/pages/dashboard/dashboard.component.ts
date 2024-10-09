import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  mapListShow: boolean = true;
  mapOptions: any = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 3,
    center: latLng(46.879966, -121.726909)
  };
  constructor() {}

  toggleMapList() {
    this.mapListShow = !this.mapListShow;
  }

}
