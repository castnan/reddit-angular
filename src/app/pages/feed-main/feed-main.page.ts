import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed-main',
  templateUrl: './feed-main.page.html',
  styleUrls: ['./feed-main.page.css']
})
export class FeedMainPage implements OnInit { 
   results: any[] | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('chegou em outra tela')
    this.route.queryParams.subscribe(params => {
      this.results = params['results'];
    });
  }
}
