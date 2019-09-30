import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tot-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() id: Number;
  @Input() name: string;
  @Input() color: string;
  @Output() click = new EventEmitter<any>();

  onClick() {
    this.click.emit({
      id: this.id,
    });
  }

  setBackgroundStyle() {
    return {
      background: `radial-gradient(${this.color}, #39393f)`,
      'box-shadow': `0 0 60px ${this.color}`,
    };
  }
}
