import { Component, OnInit } from '@angular/core';
import { IMovie, Movies } from './models/IMovie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  searchValue: string = '';
  searchRate: number = 0;
  movieList: IMovie[] = [];

  ngOnInit(): void {
    this.movieList = Movies;
  }

  handleSearch(value: string): void {
    this.searchValue = value;
  }

  handleRate(rate: number): void {
    this.searchRate = rate;
  }

  handleFilter(): IMovie[] {
    return this.movieList.filter(
      (movie) =>
        movie.rate >= this.searchRate &&
        movie.title
          .toLowerCase()
          .includes(this.searchValue.trim().toLowerCase())
    );
  }

  addMovie(newMovie: IMovie): void {
    newMovie._id = this.movieList.length.toString();
    this.movieList.push(newMovie);
  }
}
