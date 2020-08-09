import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  baseURL = 'https://api.spaceXdata.com/v3/launches?limit=100';
  constructor(private httpService: HttpClient) {}

  getLaunchData(launchSuccess, landSuccess, launchYear): Observable<any> {
    let paramsData = '';
    if (launchSuccess && launchSuccess !== 'undefined') {
      paramsData = paramsData + `&launch_success=${launchSuccess}`;
    }
    if (landSuccess && landSuccess !== 'undefined') {
      paramsData = paramsData + `&land_success=${landSuccess}`;
    }
    if (launchYear && launchYear !== 'undefined') {
      paramsData = paramsData + `&launch_year=${launchYear}`;
    }
    return this.httpService.get(`${this.baseURL}${paramsData}`);
  }
}
