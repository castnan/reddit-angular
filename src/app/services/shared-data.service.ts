import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private searchDataSubject = new BehaviorSubject<any[]>([]);
  searchData$ = this.searchDataSubject.asObservable();

  
  private postDataSubject = new BehaviorSubject<any>({});
  postData$ = this.postDataSubject.asObservable();

  updateSearchData(data: any[]): void {
    this.searchDataSubject.next(data);
  }
  
  updatePostData(data: any): void {
    this.postDataSubject.next(data);
  }
  getPostData(): any {
    return this.postDataSubject.value;
  }

  clearPostData(): void {
    this.postDataSubject.next({});
  }
}
