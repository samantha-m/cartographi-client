import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-map',
  templateUrl: './add-new-map.component.html',
  styleUrl: './add-new-map.component.css'
})
export class AddNewMapComponent {

  readonly dialogRef = inject(MatDialogRef<AddNewMapComponent>);
  title = new FormControl('');
  description = new FormControl('');

}
