import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-map',
  templateUrl: './add-new-map.component.html',
  styleUrl: './add-new-map.component.css'
})
export class AddNewMapComponent {

  readonly dialogRef = inject(MatDialogRef<AddNewMapComponent>);
  error: boolean = false;
  map = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('')
  })

  onSubmit(): void {

  }

}
