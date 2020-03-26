import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { ColorDetailComponent } from './color-detail.component';

const routes: Routes = [{ path: '', component: ColorDetailComponent }];

/**
 * COLOR DETAIL
 * LAZY LOADED FEATURE MODULE
 */
@NgModule({
  declarations: [ColorDetailComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ColorDetailModule { }
