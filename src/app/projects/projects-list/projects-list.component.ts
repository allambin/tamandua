import { Component, OnInit } from '@angular/core';

import { Project } from '../project';

@Component({
  selector: 'tam-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  public isLoggedIn = true; // temporary
  public projects: Project[] = [
      new Project('ABC', 'Title 1', 'A description'),
      new Project('DEF', 'Title 2', 'Another description')
  ];

  constructor() { }

  ngOnInit() {
  }

}
