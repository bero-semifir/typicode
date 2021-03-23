import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';
import { map } from "rxjs/operators";
import { UserService } from './user.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  readonly route: string = environment.apiUrl + '/posts';

  constructor(private http: HttpClient, private userApi: UserService) { }

  /**
   * Recupère les articles
   * @return Observable<Article[]>
   */
  getArticles(): Observable<Article[]> {
    // récupére la liste des articles
    let obs = this.http.get<Article[]>(this.route)
      // // modification des articles présent dans l'observable
      // .pipe(map((articles: Article[]) => {
      //   // mapping sur chacun des articles
      //   articles.forEach((article: Article) => this.mapAuthor(article));
      //   return articles;
      // }));
    console.log(obs);
    return obs;
  }

  /**
   * Récupére un article en fonction de son id
   * @param id id de l'article
   */
  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.route}/${id}`)
      .pipe(map((article: Article) => {
        this.mapAuthor(article)
        return article;
      }))
  }

  /**
   * Associe un User en tant qu'auteur d'un article
   * @param article article a mapper
   */
  mapAuthor(article: Article) {
    this.userApi.getUser(article.userId)
      .subscribe((user: User) => article.author = user);
  }
}
