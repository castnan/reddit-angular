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
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.scrollY;

    if (windowBottom >= docHeight - 100) {
      this.loadMoreItems();
    }
  }
  constructor(private el: ElementRef,private router: Router) {}
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  loadMoreItems(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.visibleResults = this.visibleResults.concat(this.results?.slice(start, end) || []);
    this.currentPage++;
  }
  redirectToDetailPage(url: string): void {
    this.router.navigate([''], { queryParams: { url } });
  }
}
