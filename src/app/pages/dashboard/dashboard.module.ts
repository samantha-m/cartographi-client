import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
