import { Component,  OnInit, Output,Input, EventEmitter } from '@angular/core';
import {  NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit {
  @Input() public name;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
