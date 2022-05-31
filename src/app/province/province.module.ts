import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvinceRoutingModule } from './province-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {ProvinceListComponent} from "./province-list/province-list.component";


@NgModule({
  declarations: [ProvinceListComponent],
  imports: [
    CommonModule,
    ProvinceRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProvinceModule { }
