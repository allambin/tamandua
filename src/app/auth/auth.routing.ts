import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";

export const AUTH_ROUTES: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: '/' }
];

export const authRouting = RouterModule.forChild(AUTH_ROUTES);
