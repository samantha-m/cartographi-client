import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { latLng, Map, tileLayer } from 'leaflet';
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

  @ViewChild("map") mapEl: ElementRef;
  leaflet: Map;
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

  resizeMap(): void {
    if (!this.mapListShow) {
      this.mapEl.nativeElement.style.setProperty("width", "95%");
    } else {
      this.mapEl.nativeElement.style.setProperty("width", "0%");
    }
    setTimeout(() => { this.leaflet.invalidateSize(); }, 500);
  }

  toggleMapList(): void {
    this.mapListShow = !this.mapListShow;
    this.resizeMap();
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

  refreshDashboard(): void {
    this.maps = this.mapService.getMaps();
  }

  onMapReady(map: Map): void {
    this.leaflet = map;
  }

  ngOnInit(): void {
    this.refreshDashboard();
  }

}
