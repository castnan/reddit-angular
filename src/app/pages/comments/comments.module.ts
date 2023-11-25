import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditService } from '../../services/reddit.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  subreddit: string | null = null;
  postId: string | null = null;
  comments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private redditService: RedditService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.subreddit = params['subreddit'];
      this.postId = params['postId'];

      if (this.subreddit && this.postId) {
        this.fetchComments();
      }
    });
  }

  fetchComments(): void {
    this.redditService.getComments(this.subreddit!, this.postId!).subscribe(
      (comments) => {
        console.log('Comentários:', comments);
        this.comments = comments; // Ou faça algo mais específico aqui conforme necessário.
      },
      (error) => {
        console.error('Erro ao obter comentários:', error);
      }
    );
  }
}
