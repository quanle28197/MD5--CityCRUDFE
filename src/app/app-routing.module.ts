import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'city',
    loadChildren: () => import('./city/city.module').then(module => module.CityModule)
  },
  {
    path: 'province',
    loadChildren: () => import('./province/province.module').then(module => module.ProvinceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
