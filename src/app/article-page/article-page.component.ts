import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  articles: Article[] = [];

  today: number;

  constructor(private articleApi: ArticleService) {
    this.today = Date.now();
  }

  ngOnInit(): void {
    this.articleApi.getArticles().subscribe((articles: Article[]) => {
      this.setArticles(articles)
      console.log(articles)
    });
  }

  setArticles(articles: Article[]){
    this.articles = articles;
  }

}
