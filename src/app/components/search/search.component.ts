// search.component.ts
import { Component } from '@angular/core';
import { RedditService } from '../../services/reddit.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = 'FullDev';

  constructor(
    private redditService: RedditService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  search() {
    if (this.searchQuery.trim() !== '') {
      this.redditService.searchSubreddit(this.searchQuery).subscribe({
        next: (result) => {
          this.sharedDataService.updateSearchData(result.data.children);
          this.router.navigate(['/feed-main']);
        },
        error: (error) => {
          console.error('Erro na pesquisa:', error);
        }
      });
    }
  }
}
