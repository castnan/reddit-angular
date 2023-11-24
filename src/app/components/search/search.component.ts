import { Component } from '@angular/core';
import { RedditService } from '../../services/reddit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = 'FullDev';
  constructor(private redditService: RedditService, private router: Router) {}

  search() {
    if (this.searchQuery.trim() !== '') {
      this.redditService.searchSubreddit(this.searchQuery).subscribe(
        (result) => {
          this.router.navigate(['/feed-main']).then((navigationSuccess) => {
            if (navigationSuccess) {
              console.log('Navegação concluída com sucesso!');
            } else {
              console.error('Erro na navegação');
            }
          });
        },
        (error) => {
          console.error('Erro na pesquisa:', error);
        }
      );
    }
  }
}
