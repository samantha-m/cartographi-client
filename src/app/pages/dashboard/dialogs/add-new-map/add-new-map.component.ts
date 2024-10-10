import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CartographiMap } from '../../../../models/map';
import { NotificationService } from '../../../../services/notification.service';
import  { errors } from '../../../../enums/errors';
import { MapService } from '../../../../services/map.service';

@Component({
  selector: 'app-add-new-map',
  templateUrl: './add-new-map.component.html',
  styleUrl: './add-new-map.component.css'
})
export class AddNewMapComponent {

  readonly dialogRef = inject(MatDialogRef<AddNewMapComponent>);
  map = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('')
  });
  constructor (
    private notificationService: NotificationService,
    private mapService: MapService
  ) {}

  onSubmit(): void {
    const title = this.map.get('title')?.value;
    const desc = this.map.get('description')?.value;
    if (title && desc) {
      const newMap: CartographiMap = new CartographiMap(title, desc);
      this.mapService.addMap(newMap);
      this.dialogRef.close();
    } else {
      this.notificationService.showError(errors.MAP_INVALID_CONFIG);
    }
  }

}
