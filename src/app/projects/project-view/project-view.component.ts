import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { FormArray, FormGroup, FormControl, Validator, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { ProjectService } from '../project.service';
import { Project } from '../project';
import { Task } from '../task';

@Component({
  selector: 'tam-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  public project: Project = null;
  private projectId: number;
  private subscription: Subscription;

  constructor(private projectService: ProjectService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.projectId = +params['id'] // + convert into number
          this.projectService.getProject(this.projectId).subscribe(
            response => {
              this.project = response;
            }
          );
        } else {
          this.project = null;
        }
      }
    );
  }

  public getTaskStyles(task: Task) {
    let isClosed: boolean = false;
    let styles = {};
    if(task.status == "resolved" || task.status == "rejected") {
      isClosed = true;
      styles = {
        'text-decoration': 'line-through',
        'opacity': '0.5',
      }
    } else {
      styles = {
        'color': task.priority == "urgent" || task.priority == "high" ? '#a94442' : '#333',
        'font-weight': task.priority == "urgent" ? 'bold' : 'normal',
      };
    }

    return styles;
  }

}
