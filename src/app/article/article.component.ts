import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
// import pour lire l'url
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article!: Article;

  constructor(private activatedRoute: ActivatedRoute, private articleApi: ArticleService) { }

  ngOnInit(): void {
    let articleId: number;

    this.activatedRoute.params.subscribe((params)=>{
      articleId = parseInt(params.id);
      console.log(articleId)
      this.articleApi.getArticle(articleId).subscribe((article: Article)=> this.article = article);
    })
  }

}
