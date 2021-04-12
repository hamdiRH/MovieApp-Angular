import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() rate: number = 0;
  @Output() handleRate = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onStarClick(rate: number): void {
    this.handleRate.emit(rate);
    this.rate = rate;
  }
}
