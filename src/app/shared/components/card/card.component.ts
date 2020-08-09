import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() launchDetails;
  @Input() landSuccess;
  landingInput;
  constructor() {}

  ngOnInit(): void {
    this.landingInput = this.landSuccess
      ? this.landSuccess.charAt(0).toUpperCase() + this.landSuccess.slice(1)
      : '';
  }
}
