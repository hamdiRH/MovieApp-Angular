import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  isOpen: boolean = false;
  title: string = '';
  description: string = '';
  rate: string = '';
  date: string = '';
  imgUrl: string = '';
  category: string = '';

  @Output() addMovie = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleIsOpen(): void {
    this.isOpen = !this.isOpen;
  }
  stopPropagation(event: any) {
    event.stopPropagation();
  }

  resetForm(): void {
    this.title = '';
    this.description = '';
    this.rate = '';
    this.date = '';
    this.imgUrl = '';
    this.category = '';
  }

  handleSubmit(event: any): void {
    event.preventDefault();
    const newMovie: object = {
      title: this.title,
      description: this.description,
      rate: this.rate,
      date: this.date,
      category: this.category,
      imgUrl: this.imgUrl,
    };
    this.addMovie.emit(newMovie);
    this.isOpen = false;
    this.resetForm();
  }
  ngOnDestroy() {
    console.log('Bye Bye......');
  }
}
