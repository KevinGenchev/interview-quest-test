import { Component, Input } from '@angular/core';

@Component({
  selector: 'iq-card-component',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
