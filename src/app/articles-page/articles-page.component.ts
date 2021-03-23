import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {

  articles!: Article[];

  constructor(private articleApi: ArticleService) { }

  ngOnInit(): void {
    this.articleApi.getArticles().subscribe((articles: Article[])=>{
      this.articles = articles;
    })
  }

}
