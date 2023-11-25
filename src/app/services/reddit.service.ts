import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  private redditApiUrl: string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.redditApiUrl = this.configService.getConfig().redditApiUrl;
  }

  searchSubreddit(subreddit: string): Observable<any> {
    const apiUrl = `${this.redditApiUrl}r/${subreddit}/top.json`;

    return this.http.get(apiUrl).pipe(
      catchError((error) => {
        return error
      })
    );
  }

}
