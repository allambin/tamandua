import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'tam-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  public isLoggedIn = true; // temporary
  public projects: Project[];
  public errorMessage: any;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
      this.projectService.fetchProjects().subscribe(
        projects => this.projects = projects,
        error =>  this.errorMessage = <any>error
      );
  }

}
