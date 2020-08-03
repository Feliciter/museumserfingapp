import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


items;
 searchForm;

constructor(
  //private cartService: CartService,
  private formBuilder: FormBuilder,
) {
  this. searchForm = this.formBuilder.group({
    searchword: ''
   
  });
}
onSubmit( searchData) {
  // Process  search data here
  // this.items = this.cartService.clearCart();  

  console.log('Your searh has been submitted',  searchData);
  this. searchForm.reset();
}




  ngOnInit(): void {
  }

}

