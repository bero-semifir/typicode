import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {

  @Input() article!: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
