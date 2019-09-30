import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tot-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  closeModal() {
    this.modalClose.next();
  }
}
