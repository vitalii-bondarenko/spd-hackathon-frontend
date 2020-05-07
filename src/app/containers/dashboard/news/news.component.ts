import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NewsDto, NewsListDto } from '../../../rest/news/NewsDto';
import { NewsService } from '../../../rest/news/news.service';
import { SnotifyService } from 'ng-snotify';
import { AuthService } from '../../../modules/auth/auth.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList: NewsListDto;
  formIsShown: boolean;
  isAdmin: boolean;
  newNews: NewsDto = {
    title: null,
    createdBy: null,
    text: null,
    createdAt: null,
    videoUrl: null
  };

  constructor(public sanitizer: DomSanitizer,
              public newsService: NewsService,
              private snotifyService: SnotifyService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.newsService.getNewsList().subscribe(
      newsList => {
        this.newsList = newsList;
      },
      error => this.snotifyService.error(error.message)
    );
  }

  addNews() {
    this.newsService.createNews(this.newNews).subscribe(
      next => {
        this.newsList.push(next.news);
        this.snotifyService.success(next.message);
        this.formIsShown = false;
      },
      error => this.snotifyService.error('Smth goes wrong'),
    );
  }

  showForm() {
    this.newsService.getNewsList().subscribe(
      news => console.log(news)
    );
    this.formIsShown = true;
  }

  hideForm() {
    this.formIsShown = false;
  }

}
