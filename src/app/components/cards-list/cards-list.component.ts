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
  subscriptionsList = new Subscription();
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
    const reqParams = {
      launch_success: this.filtersData.find(
        (f) => f.name === 'successfulLaunch'
      ).selectedValue,
      land_success: this.filtersData.find((f) => f.name === 'successfulLanding')
        .selectedValue,
      launch_year: this.filtersData.find((f) => f.name === 'launchYear')
        .selectedValue,
    };
    console.log(reqParams);
    this.subscriptionsList.add(
      this.sharedService.getLaunchData(reqParams).subscribe((data) => {
        this.launchData = data;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptionsList.unsubscribe();
  }
}
