import { Routes, RouterModule } from "@angular/router";
import { ProjectsListComponent } from "./projects-list/projects-list.component";
import { ProjectEditComponent } from "./project-edit/project-edit.component";
import { AuthGuard } from "../shared/auth.guard";

export const PROJECTS_ROUTES: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: 'new', component: ProjectEditComponent, canActivate: [AuthGuard] },
  { path: ':id/edit', component: ProjectEditComponent }
];

export const projectsRouting = RouterModule.forChild(PROJECTS_ROUTES);
