import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly route: string = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  /**
   * Récupére la liste des utilisateurs
   * @returns Observable<User[]>
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.route)
  }

  postUser(user: User){
    return this.http.post(this.route,user)
  }

}
