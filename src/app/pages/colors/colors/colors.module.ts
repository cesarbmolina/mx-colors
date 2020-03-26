import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { ColorsComponent } from './colors.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [{ path: '', component: ColorsComponent }];

/**
 * COLORS
 * LAZY LOADED FEATURE MODULE
 */
@NgModule({
  declarations: [ColorsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],
  providers: []
})
export class ColorsModule { }
