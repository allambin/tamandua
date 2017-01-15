import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

import { AppConfigService } from '../app.config.service';

@Injectable()
export class AuthService {

  isLoggedInChange = new Subject<boolean>();
  private loggedIn = false;

  constructor(private appConfig: AppConfigService, private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }
  
  public isLoggedIn(): boolean {
    return this.loggedIn;
  }
  
  public login(email: string, password: string) {
    let apiUrl = this.appConfig.getParam("apiUrl");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(apiUrl + 'users/login', { email: email, password: password }, options)
      .map((response: Response) => {
        return response.json();
      })
      .map(response => {
        if(!response.hasOwnProperty('auth_token')) {
          return false;
        }
          
        this.loggedIn = true;
        localStorage.setItem('auth_token', response.auth_token);
        this.isLoggedInChange.next(this.loggedIn);
        return true;
      })
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
  }
  
  public logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

}
