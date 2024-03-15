import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly redditUrl = '/r/';

  constructor(private http: HttpClient) { }

  getHeadlinesByCategory(category: string): Observable<any> {
    return this.http.get(`${this.redditUrl}${category}/.json`);
  }
}