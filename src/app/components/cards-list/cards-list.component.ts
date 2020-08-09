import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() filtersData;
  launchData;
  landSuccess;
  subscriptionsList = new Subscription();
  loadingLaunchPrograms = false;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    console.log(this.filtersData);
    // this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes && changes.filtersData && !changes.firstChange) {
      this.filtersData = changes.filtersData.currentValue;
      this.loadData();
    }
  }

  loadData() {
    const launch_success = this.filtersData.find(
      (f) => f.name === 'successfulLaunch'
    ).selectedValue;
    const land_success = this.filtersData.find(
      (f) => f.name === 'successfulLanding'
    ).selectedValue;
    this.landSuccess = land_success;
    const launch_year = this.filtersData.find((f) => f.name === 'launchYear')
      .selectedValue;
    this.loadingLaunchPrograms = true;
    this.subscriptionsList.add(
      this.sharedService
        .getLaunchData(launch_success, land_success, launch_year)
        .subscribe(
          (data) => {
            this.launchData = data;
            this.loadingLaunchPrograms = false;
          },
          (err) => {
            this.loadingLaunchPrograms = false;
          }
        )
    );
  }

  ngOnDestroy() {
    this.subscriptionsList.unsubscribe();
  }
}
