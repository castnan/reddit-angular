import { Component } from '@angular/core';

@Component({
  selector: 'app-button-top',
  templateUrl: './button-top.component.html',
  styleUrl: './button-top.component.css'
})
export class ButtonTopComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
