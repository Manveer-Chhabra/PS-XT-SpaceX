import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  baseURL = 'https://api.spaceXdata.com/v3/launches?limit=100';
  constructor(private httpService: HttpClient) {}

  getLaunchData(reqBody): Observable<any> {
    let paramsData = '';
    if (reqBody.launch_success) {
      paramsData = paramsData + `&launch_success=${reqBody.launch_success}`;
    } else if (reqBody.land_success) {
      paramsData = paramsData + `&land_success=${reqBody.land_success}`;
    } else if (reqBody.launch_year) {
      paramsData = paramsData + `&launch_year=${reqBody.launch_year}`;
    }
    return this.httpService.get(`${this.baseURL}${paramsData}`);
  }
}
