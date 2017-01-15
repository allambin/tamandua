import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AppConfigService } from './app.config.service';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { routing } from "./app.routing";
import { HomeComponent } from './home/home.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    HomeComponent,
    ProjectsListComponent,
    ProjectEditComponent,
    AuthComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    AppConfigService,
    { provide: APP_INITIALIZER, useFactory: (config: AppConfigService) => () => config.load(), deps: [AppConfigService], multi: true },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
