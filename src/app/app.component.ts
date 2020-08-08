import { Component, Input } from '@angular/core';
import { ApiService } from './services/api.service';
import { Collection } from './models/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'museumsurfingapp';
 
  datasrc: any;
 //  searchphrase;

 @Input() searchphrase: string;
  constructor(private apiService: ApiService) {}

  //  searchphrasee = 'Rembrandt van Rijn';

  addSearch(searchphrase: string) {
    // this.currentFraze = searchphrase.searchword;
    // console.log('APP here', this.currentFraze);

    //test

    console.log('app comp ' + this.searchphrase);

    this.apiService
      .GetCollection(this.searchphrase)
      .subscribe((data: any[]) => {
        console.log(data['artObjects']);
        this.datasrc = data['artObjects'];
      });
  }
}
