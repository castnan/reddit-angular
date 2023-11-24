import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-feed-main',
  templateUrl: './feed-main.page.html',
  styleUrls: ['./feed-main.page.css']
})
export class FeedMainPage implements OnInit { 
  results: any[] | undefined;
  searchData: any[] = [];  // Variável para armazenar os dados

  constructor(
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.results = state ? state['searchData'] : undefined;
    this.sharedDataService.searchData$.subscribe((data) => {
      console.log('DADOS ATUALIZADOS NO FEED MAIN TS', data);
      this.searchData = data;  // Atualiza a variável com os dados
    });
  }
}
