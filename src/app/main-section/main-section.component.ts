import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Collection } from '../models/collection';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';

@Component({
  selector: 'app-mainsection',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainsectionComponent implements OnInit {
  @Input() datasrc: Collection;

  constructor(private modalService: NgbModal) {}

  open(item) {
    const modalRef = this.modalService.open(PopupModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.item = item;
  }

  ngOnInit() {}
}
