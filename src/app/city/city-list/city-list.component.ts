import { Component, OnInit } from '@angular/core';
import {City} from "../../model/city";
import {CityService} from "../../service/city.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

declare var $: any;

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: City[] = [];
  constructor(private cityService: CityService,
              private router: Router) { }

  ngOnInit() {
    this.showAllCity();
  }
  showAllCity() {
    this.cityService.getAll().subscribe((data) => {
      this.cities = data;
      $(function() {
        $('#city').DataTable({
          'paging': true,
          'lengthChange': false,
          'searching': true,
          'ordering': true,
          'info': true,
          'pageLength': 5,
          'autoWidth': false,
          'responsive': true,
        });
      });
    }, (error => {
      var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        icon: 'error',
        title:'Failed'
      })
    }));
  }
}
