import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(300)),
    ])
  ]
})
export class HomeComponent {
  isSmallScreen = false;

  ngOnInit(): void {
    this.isSmallScreen = window.innerWidth < 576; 
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth < 576; 
    });
  }
}
