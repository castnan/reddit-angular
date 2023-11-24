import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    const apiUrl = `${this.redditApiUrl}r/gamedev/.json`;
   
    return this.http.get(apiUrl);
  }
}
