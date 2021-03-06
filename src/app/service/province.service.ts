import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Province} from "../model/province";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  constructor(private http: HttpClient) { }
  getAllProvince(): Observable<Province[]> {
    return this.http.get<Province[]>(`${API_URL}/provinces`);
  }
}
