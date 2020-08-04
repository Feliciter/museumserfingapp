import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


items;
 searchForm;
 datasrc ;
 message;

constructor(
  private data: DataService,
  private apiService : ApiService ,
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

  // this.apiService.GetCollection().subscribe((data: any[])=>{  
  //   console.log(data['artObjects']);  
  //   this.datasrc = data['artObjects'];
  
  
  // }) 

  //this.data.currentMessage.subscribe(message => this.message = message)
  this.data.changeMessage(searchData.searchword)


  this. searchForm.reset();
}








  ngOnInit(): void {
    
  }

}

