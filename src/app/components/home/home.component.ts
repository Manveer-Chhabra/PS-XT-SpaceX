import { Component, OnInit } from '@angular/core';
import { filters } from 'src/assets/filters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  filtersData = [];
  constructor() {}

  ngOnInit(): void {
    this.filtersData = filters;
  }

  updateLaunchCards($e) {
    console.log($e);
    this.filtersData = Object.assign([], $e);
  }
}
