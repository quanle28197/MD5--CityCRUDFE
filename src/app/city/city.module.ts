import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import {CityListComponent} from "./city-list/city-list.component";
import {CityCreateComponent} from "./city-create/city-create.component";
import {CityEditComponent} from "./city-edit/city-edit.component";
import {CityDeleteComponent} from "./city-delete/city-delete.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CityListComponent,
    CityCreateComponent,
    CityEditComponent,
    CityDeleteComponent,
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    ReactiveFormsModule
  ]
})
export class CityModule { }
