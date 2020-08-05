import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  addSearch = new EventEmitter<any>();

  // @Output()
  // addAttendee = new EventEmitter<any>();

  items;
  searchForm;
  datasrc;
  message;

  constructor(
    private data: DataService,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      searchword: '',
    });
  }
  onSubmit(value) {
    // Process  search data here
    // this.items = this.cartService.clearCart();
   
    // const searchphrase = {
    //   name: 
     const searchphrase = this.searchForm.value //};

    console.log('Your searh has been submitted', searchphrase);


    this.addSearch.emit(searchphrase);
    //TO DO <any to model>
    // this.addAttendee.emit(attendee);

   // this.searchForm.reset();
  }

  ngOnInit(): void {}
}
