// comments.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditService } from '../../services/reddit.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  subreddit: string | null = null;
  postId: string | null = null;
  authorPost: any[] = [];
  otherComments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private redditService: RedditService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.subreddit = params['subreddit'];
      this.postId = params['id'];

      if (this.subreddit !== null && this.subreddit !== '' && this.postId !== null && this.postId !== '') {
          this.fetchComments();
      }
    });
  }

  fetchComments(): void {
    console.log('Subreddit:', this.subreddit);
    console.log('Post ID:', this.postId);

    this.redditService.getComments(this.subreddit!, this.postId!)
        .subscribe({
            next: (comments) => {
                if (comments.length > 0 && comments[0]?.data) {
                    this.authorPost = comments[0]?.data?.children || []; //post original
                }
                if (comments.length > 1 && comments[1]?.data) {
                    this.otherComments = comments[1]?.data?.children || []; //comentários
                }

                this.sharedDataService.updatePostData({ data: { children: this.authorPost } });
            },
            error: (error) => {
                console.error('Error fetching comments:', error);
            }
        });
}

}
