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
  getSnoovatarImage(username: string): Promise<string> {
    return fetch(`https://www.reddit.com/user/${username}/about.json`)
      .then(response => response.json())
      .then(data => {
        const snoovatarImg = data.data.snoovatar_img;
        return snoovatarImg || 'assets/images/icon-green.jpg';
      })
      .catch(error => {
        console.error(`Erro ao obter informações do usuário ${username}:`, error);
        return 'assets/images/icon-green.jpg';
      });
  }
  getComments(subreddit: string, postId: string): Observable<any> {
    const url = `${this.redditApiUrl}/r/${subreddit}/comments/${postId}.json`;
    return this.http.get(url);
  }

}
