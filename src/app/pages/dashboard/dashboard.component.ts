import { Component, inject } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { AddNewMapComponent } from './dialogs/add-new-map/add-new-map.component';
import { MatDialog } from '@angular/material/dialog';

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
  dialog = inject(MatDialog);
  dialogRef: any = null;
  constructor() {}

  toggleMapList(): void {
    this.mapListShow = !this.mapListShow;
  }

  addNewMap(): void {
    this.dialogRef = this.dialog.open(AddNewMapComponent, {
      height: '40%',
      width: '60%'
    });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      
    });
  }

}
