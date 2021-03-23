import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article!: Article;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.articleService.getArticle(parseInt(routeParams.get('id')!)).subscribe((article: Article)=>{
      this.article = article;
    })
  }

}
