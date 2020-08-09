import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

import { Collection } from '../models/collection';

@Component({
  selector: 'app-mainsection',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainsectionComponent implements OnInit {
  @Input() datasrc: Collection;


  constructor(  ) { }

  ngOnInit() {

  }
}
