import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() increment: object = {};
  @Output() handleSearch = new EventEmitter<string>();
  @Output() handleRate = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  search(searchValue: string): void {
    this.handleSearch.emit(searchValue);
  }
  searchByRate(rate: number): void {
    this.handleRate.emit(rate);
  }
}
