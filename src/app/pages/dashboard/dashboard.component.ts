import { Component, inject, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { AddNewMapComponent } from './dialogs/add-new-map/add-new-map.component';
import { MatDialog } from '@angular/material/dialog';
import { CartographiMap } from '../../models/map';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  maps: CartographiMap[] = [];
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
  constructor(
    private mapService: MapService
  ) {}

  toggleMapList(): void {
    this.mapListShow = !this.mapListShow;
  }

  addNewMap(): void {
    this.dialogRef = this.dialog.open(AddNewMapComponent, {
      height: '40%',
      width: '60%'
    });
    this.dialogRef.afterClosed().subscribe((result: any) => {
      this.refreshDashboard();
    });
  }

  refreshDashboard() {
    this.maps = this.mapService.getMaps();
  }

  ngOnInit(): void {
    this.refreshDashboard();
  }

}
