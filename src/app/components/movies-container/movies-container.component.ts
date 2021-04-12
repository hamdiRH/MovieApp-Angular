import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
})
export class MoviesContainerComponent implements OnInit {
  @Input() movieList: IMovie[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(this.movieList);
  }
}
