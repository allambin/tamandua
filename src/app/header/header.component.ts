import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'tam-header',
  templateUrl: './header.component.html',
  styles: [`
  a {
    cursor: pointer;
  }`]
})
export class HeaderComponent implements OnInit {

  public loggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
//    this.authService.isLoggedInChange.subscribe(result => this.loggedIn = result);
    this.loggedIn = this.authService.isLoggedIn();
  }
  
  public onLogout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this.router.navigate(['/']);
  }
  
}
