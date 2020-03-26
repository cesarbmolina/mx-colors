import { NgModule } from '@angular/core';
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
    RouterModule.forChild(routes)
  ]
})
export class ColorsModule { }
