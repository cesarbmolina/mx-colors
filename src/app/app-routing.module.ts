import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /** CONF ROUTE */
  {
    path: '',
    loadChildren: () => import('./pages/colors/colors/colors.module').then(m => m.ColorsModule),
  },
  {
    path: 'colors',
    loadChildren: () => import('./pages/colors/colors/colors.module').then(m => m.ColorsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
