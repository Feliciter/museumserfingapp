import { Component, Input } from '@angular/core';
import { ApiService } from './services/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Collection } from './models/collection';

import { PopupModalComponent } from './popup-modal/popup-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Rijksmuseum surfing';
 
  datasrc = [];
 

 //@Input() searchphrase: string;
  constructor(
    private apiService: ApiService,
    private modalService: NgbModal) {}

  searchphrase ;

  addSearch(searchphrase: string) {

    //draft this.searchphrase=searchphrase= 'Rembrandt van Rijn';
    this.searchphrase=searchphrase;
    console.log('app comp ' +this.searchphrase );
    
    this.apiService
      .GetCollection(this.searchphrase)
      .subscribe((data: any[]) => {
        console.log(data['artObjects']);
        this.datasrc = data['artObjects'];
      });
    }




  // ngOnDestroy() {
  //   if (this.apiService.GetCollection(this.searchphrase).subscription()) {
  //     this.apiService.GetCollection(this.searchphrase).unsubscribe();
  //   }    
  // }



}
