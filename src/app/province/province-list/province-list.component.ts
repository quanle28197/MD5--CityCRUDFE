import { Component, OnInit } from '@angular/core';
import {Province} from "../../model/province";
import {ProvinceService} from "../../service/province.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent implements OnInit {
  provinces: Province[] = [];
  constructor(private provinceService: ProvinceService,
              private router: Router) { }

  ngOnInit() {
    this.getAllProvinces();
  }
  getAllProvinces() {
    this.provinceService.getAllProvince().subscribe((data) => {
      this.provinces = data;
    }, (error => {
      var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        icon: 'error',
        title: 'Error'
      })
    }));
  }
}
