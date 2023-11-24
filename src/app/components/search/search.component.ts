import { Component } from '@angular/core';
import { RedditService } from '../../services/reddit.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = 'FullDev';
  constructor(private redditService: RedditService) {}

  search() {
    if (this.searchQuery.trim() !== '') {
      this.redditService.searchSubreddit(this.searchQuery).subscribe(
        (result) => {
          console.log(result.data.children)
          console.log('Resultado da pesquisa:', result);
        },
        (error) => {
          console.error('Erro na pesquisa:', error);
        }
      );
    }
  }
}
