import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// COMPONENT
import { ColorDetailsComponent } from './color-details/color-details.component';

@NgModule({
  declarations: [
    ColorDetailsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ColorDetailsComponent,
  ],
})
export class SharedModule { }
