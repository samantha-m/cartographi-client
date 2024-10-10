import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MapService } from '../../../../services/map.service';

@Component({
  selector: 'app-confirm-map-delete',
  templateUrl: './confirm-map-delete.component.html',
  styleUrl: './confirm-map-delete.component.css'
})
export class ConfirmMapDeleteComponent {

  readonly dialogRef = inject(MatDialogRef<ConfirmMapDeleteComponent>);
  constructor(
    mapService: MapService
  ) {}

  

}
