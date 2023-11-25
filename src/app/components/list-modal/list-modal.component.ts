import { Component, Input, OnInit, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css']
})
export class ListModalComponent implements OnInit {
  @Input() results: any[] | undefined;
  visibleResults: any[] = [];

  itemsPerPage = 5;
  currentPage = 1;

  ngOnInit(): void {
    this.loadMoreItems();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body, html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.scrollY;

    if (windowBottom >= docHeight - 100) {
      this.loadMoreItems();
    }
  }

  constructor(private el: ElementRef, private router: Router) {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadMoreItems(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    const newResults = this.results?.slice(start, end) || [];
    newResults.forEach(obj_item => {
      this.fetchSnoovatarImage(obj_item); 
    });

    this.visibleResults = this.visibleResults.concat(newResults);
    this.currentPage++;
  }

  fetchSnoovatarImage(items: any): void {
    const username = items.data.author; 
    fetch(`https://www.reddit.com/user/${username}/about.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data.data.snoovatar_img)
        const snoovatarImg = data.data.snoovatar_img;
  
        if (snoovatarImg) {
          items.snoovatarImg = snoovatarImg;
        } else {
          items.snoovatarImg = 'assets/images/icon-green.jpg';
        }
      })
      .catch(error => console.error(`Erro ao obter informações do usuário ${username}:`, error));
  }
  

  redirectToDetailPage(url: string): void {
    this.router.navigate([''], { queryParams: { url } });
  }
}
