import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tam-auth',
  template: `<div class="container"><router-outlet></router-outlet></div>`,
  styles: [`
  .container {
    margin-top: 70px;
  }`]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
