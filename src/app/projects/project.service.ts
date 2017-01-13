import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AppConfigService } from '../app.config.service';
import { Project } from './project';

@Injectable()
export class ProjectService {

  public projects: Project[];

  constructor(private appConfig: AppConfigService, private http: Http) { }
  
  public getProjects(): Project[] {
      return this.projects;
  }
  
  public fetchProjects() {
    let apiUrl = this.appConfig.getParam("apiUrl");
    return this.http.get(apiUrl + 'projects')
           .map((response: Response) => response.json())
           .catch(this.handleError);
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
