import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

import { Project } from '../project';
import { ProjectService } from '../project.service';
import { AuthService } from '../../shared/auth.service';
import { ConfirmDeleteService } from '../../shared/confirm-delete/confirm-delete.service';

@Component({
  selector: 'tam-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  public loggedIn;
  public projects: Project[];
  public errorMessage: string;
  public successMessage: string;
  private subscription: Subscription;

  public showConfirmDeleteModal: boolean = false;

  constructor(private projectService: ProjectService,
    private authService: AuthService,
    private confirmDeleteService: ConfirmDeleteService) { }

  ngOnInit() {
    this.projectService.fetchProjects().subscribe(
      projects => this.projects = projects,
      error => this.errorMessage = <any>error
    );
    this.loggedIn = this.authService.isLoggedIn();
  }

  onDelete(id: number) {
    this.showConfirmDeleteModal = true;
    this.subscription = this.confirmDeleteService.hasConfirmed$.subscribe(
      response => {
        this.showConfirmDeleteModal = false;
        if (response) {
          this.projectService.deleteProject(id).subscribe(
            result => {
              let tr = document.getElementById("project_" + id);
              if (tr != null) {
                tr.remove();
              }
              this.successMessage = "The project has been deleted";
              this.errorMessage = null;
            },
            error => {
              this.errorMessage = error.message;
              this.successMessage = null;
            }
          );
        }
        this.subscription.unsubscribe();
      },
      error => this.showConfirmDeleteModal = false
    );
  }

}
