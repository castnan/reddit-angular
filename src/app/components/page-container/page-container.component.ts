import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
export class PageContainerComponent {
  @Input() componentId: string = '';
  @Input() display: string = 'flex';
  @Input() wrap: boolean = false;
  @Input() justify: string = 'initial';
  @Input() align: string = 'initial';
  @Input() background: string = 'transparent';
  @Input() fullWidth: boolean = false;
  @Input() width: string = 'auto';
  @Input() height: string = 'auto';
  @Input() gap: string = '40px';
containerStyles: any;
}
