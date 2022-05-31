import { Component, OnInit } from '@angular/core';
import {City} from "../../model/city";
import {Province} from "../../model/province";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CityService} from "../../service/city.service";
import {ProvinceService} from "../../service/province.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  selectedFile = null;
  city: City = {};
  provinces: Province[] = [];
  cityForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    popular: new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    area: new FormControl('', [Validators.required, Validators.pattern(/^\d*$/)]),
    image: new FormControl(''),
    description: new FormControl('', [Validators.required]),
    province: new FormControl('')
  });

  constructor(private cityService: CityService,
              private provinceService: ProvinceService) { }

  ngOnInit() {
    this.getAllProvince();
  }
  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
  }
  addCity() {
    const cityData: FormData = new FormData();
    cityData.append('id', this.cityForm.get('id').value);
    cityData.append('name', this.cityForm.get('name').value);
    cityData.append('popular', this.cityForm.get('popular').value);
    cityData.append('area', this.cityForm.get('area').value);
    cityData.append('image', this.selectedFile);
    cityData.append('description', this.cityForm.get('description').value);
    cityData.append('province', this.cityForm.get('province').value);
    if (this.cityForm.invalid) {
      return;
    } else {
      const city = cityData;
      this.cityService.addCity(city).subscribe(() => {
        var Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          icon: 'success',
          title: 'success'
        })
      });
      this.cityForm.reset();
    }
  }
  get nameControl() {
    return this.cityForm.get('name');
  }
  get popularControl() {
    return this.cityForm.get('popular');
  }
  get areaControl() {
    return this.cityForm.get('area');
  }
  get descriptionControl() {
    return this.cityForm.get('description');
  }


  getAllProvince() {
    this.provinceService.getAllProvince().subscribe((provinces) => {
      this.provinces = provinces;
    }, (error) => {
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
    });
  }

}
