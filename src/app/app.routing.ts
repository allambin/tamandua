import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { ProjectsComponent } from "./projects/projects.component";

const APP_ROUTES: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: '**', redirectTo: '/' },
    { path: '', component: HomeComponent, pathMatch: "full" }
];

export const routing = RouterModule.forRoot(APP_ROUTES);