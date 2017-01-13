import { Injectable } from '@angular/core';
import { Headers, Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class AppConfigService {

  private config: Object = null;

  constructor(private http: Http) { }
  
  public getParam(key: string) {
      return this.config[key];
  }
  
  public load() {
      return new Promise((resolve, reject) => {
        this.http.get('../assets/config.json')
        .map((response: Response) => {
            this.config = response.json();
        })
        .catch((error: any):any => {
          console.log('Configuration file could not be read');
          resolve(true);
          return Observable.throw(error.json().error || 'Server error');
        })
        .subscribe(
          data => {
            resolve(true);
          }
        )
      });
  }

}
