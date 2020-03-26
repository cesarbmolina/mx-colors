import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { ColorsComponent } from './colors.component';

const routes: Routes = [{ path: '', component: ColorsComponent }];

/**
 * COLORS
 * LAZY LOADED FEATURE MODULE
 */
@NgModule({
  declarations: [ColorsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: []
})
export class ColorsModule { }
