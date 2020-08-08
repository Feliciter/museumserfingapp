import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-mainsection',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainsectionComponent implements OnInit {
  @Input() fraze: string;

  datasrc;
  searchphrase: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.searchphrase = 'Rembrandt van Rijn';

    console.log(this.searchphrase);

    this.apiService
      .GetCollection(this.searchphrase)
      .subscribe((data: any[]) => {
        console.log(data['artObjects']);
        this.datasrc = data['artObjects'];
      });
  }
}
