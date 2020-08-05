import { Component, OnInit, Input  } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.scss'],
})
export class MainsectionComponent implements OnInit {

@Input() fraze: string;

  datasrc;

  constructor(private apiService: ApiService, private data: DataService) {}

  searchphrase: string;

  ngOnInit() {
    //test
    this.data.currentMessage.subscribe(
      (searchphrase) => (this.searchphrase = searchphrase)
    );

    // 'Rembrandt+van+Rijn'

    console.log(this.searchphrase);

    this.apiService
      .GetCollection(this.searchphrase)
      .subscribe((data: any[]) => {
        console.log(data['artObjects']);
        this.datasrc = data['artObjects'];
      });
  }
}
