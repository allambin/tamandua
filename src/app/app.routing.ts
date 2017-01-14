import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { AuthComponent } from "./auth/auth.component";
import { PROJECTS_ROUTES } from "./projects/projects.routing";
import { AUTH_ROUTES } from "./auth/auth.routing";

const APP_ROUTES: Routes = [
    { path: 'projects', component: ProjectsComponent, children: PROJECTS_ROUTES },
    { path: 'auth', component: AuthComponent, children: AUTH_ROUTES },
    { path: '**', redirectTo: '/' },
    { path: '', component: HomeComponent, pathMatch: "full" }
];

export const routing = RouterModule.forRoot(APP_ROUTES);