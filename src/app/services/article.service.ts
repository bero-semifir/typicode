import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { environment } from "../../environments/environment";
import { UserService } from './user.service';
import { User } from '../models/User';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  readonly route: string = environment.apiUrl + '/posts';

  constructor(private http: HttpClient, private userApi: UserService) { }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.route).pipe(map(articles=>{
      articles.forEach(article=>{
        this.userApi.getUser(article.userId).subscribe((user:User)=>{
          article.author = user;
        })
      })
      return articles;
    }))
  }

  getArticle(id: number): Observable<Article>{
    return this.http.get<Article>(`${this.route}/${id}`).pipe(map(article=>{
        this.userApi.getUser(article.userId).subscribe((user:User)=>{
          article.author = user;
        })
      return article;
    }))
  }

}
