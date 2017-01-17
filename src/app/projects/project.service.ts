import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
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

  private handleError(error: Response | any) {
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

  public saveProject(project: Project, id: number = null) {
    let apiUrl = this.appConfig.getParam("apiUrl");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let auth_token = localStorage.getItem('auth_token');

    if (id !== null) {
      let url = apiUrl + 'projects/' + id + '?auth_token=' + auth_token;
      return this.http.put(url, project, options)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    } else {
      let url = apiUrl + 'projects?auth_token=' + auth_token;
      return this.http.post(url, project, options)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));
    }
  }

  public getProject(id: number) {
    let apiUrl = this.appConfig.getParam("apiUrl");

    return this.http.get(apiUrl + 'projects/' + id)
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
  }

  public deleteProject(id: number) {
    let apiUrl = this.appConfig.getParam("apiUrl");
    let auth_token = localStorage.getItem('auth_token');

    let url = apiUrl + 'projects/' + id + '?auth_token=' + auth_token;
    return this.http.delete(url)
          .map((response: Response) => true)
          .catch((error: Response) => Observable.throw(error.json()));
  }

}
