import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'tam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHander(event) {
    localStorage.removeItem('auth_token');
  }
    
}
