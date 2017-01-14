import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'tam-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  public loggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
      this.authService.isLoggedInChange.subscribe(result => this.loggedIn = result);
  }
  
}
