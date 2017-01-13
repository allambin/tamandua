import { Component, OnInit } from '@angular/core';

import { ProjectService } from './project.service';

@Component({
  selector: 'tam-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
