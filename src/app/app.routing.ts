import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";

const APP_ROUTES: Routes = [
    { path: '**', redirectTo: '' },
    { path: '', component: HomeComponent, pathMatch: "full" }
];

export const routing = RouterModule.forRoot(APP_ROUTES);