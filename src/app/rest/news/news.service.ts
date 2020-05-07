import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsDto, NewsListDto } from './NewsDto';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {
  }

  getNewsList() {
    console.log('sdf');
    // return of(newsList);
    return this.http.get<NewsListDto>('/api/news/all');
  }

  createNews(news: NewsDto) {
    return this.http.post<{news: NewsDto, message: string}>('/api/news/add', news);
    // return of('true');
  }
}
