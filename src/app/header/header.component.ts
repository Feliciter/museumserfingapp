import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() addSearch = new EventEmitter<any>();

  items;
  searchForm;
  datasrc;
  message;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchword: '',
    });
  }
  onSubmit(value) {
    const searchphrase = this.searchForm.value;
    console.log('Your searh has been submitted in header comp', searchphrase);
    this.addSearch.emit(searchphrase.searchword);
    //TO DO use model

    this.searchForm.reset();
  }
}
