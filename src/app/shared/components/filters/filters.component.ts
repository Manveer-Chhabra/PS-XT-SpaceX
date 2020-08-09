import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { filters } from 'src/assets/filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  filtersList = filters;
  @Output() filtersData = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    console.log(filters);
  }

  selectDeselectFilters(filter, f) {
    console.log(filter);
    // filter.isSelected = !filter.isSelected;
    filter.selectedValue = f.value;
    this.filtersData.emit(this.filtersList);
  }
}
