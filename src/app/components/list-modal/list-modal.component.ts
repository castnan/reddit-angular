// No componente app-list-modal.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css']
})
export class ListModalComponent {
  @Input() results: any[] | undefined;
}
