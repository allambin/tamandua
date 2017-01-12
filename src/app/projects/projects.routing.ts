import { Routes, RouterModule } from "@angular/router";
import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { ProjectEditComponent } from "./project-edit/project-edit.component";

export const PROJECTS_ROUTES: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: 'new', component: ProjectEditComponent },
  { path: ':id/edit', component: ProjectEditComponent }
];

export const projectsRouting = RouterModule.forChild(PROJECTS_ROUTES);
