import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { FormArray, FormGroup, FormControl, Validator, Validators, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'tam-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit, OnDestroy {

  public isNew: boolean = true;
  private projectForm: FormGroup;
  private project: Project;
  public errorMessage: string = null;
  public successMessage: string = null;
  private subscription: Subscription;
  private projectId = null;

  constructor(private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.projectId = +params['id'] // + convert into number
          this.projectService.getProject(this.projectId).subscribe(
            response => {
              this.project = response;
              this.projectForm.controls['code'].patchValue(this.project.code);
              this.projectForm.controls['title'].patchValue(this.project.title);
              this.projectForm.controls['description'].patchValue(this.project.description);
            }
          );
          this.isNew = false;
        } else {
          this.isNew = true;
          this.project = null;
        }
        this.initForm();
      }
    );
  }

  private initForm() {
    let projectCode: string = "";
    let projectTitle: string = "";
    let projectDescription: string = "";

    this.projectForm = this.formBuilder.group({
      code: [projectCode, [Validators.required, Validators.pattern('[\\w]+')]],
      title: [projectTitle, Validators.required],
      description: [projectDescription]
    });
  }

  public onSubmit() {
    let msg = "The project has been created";
    if(!this.isNew) {
      msg = "The project has been updated";
    }
    this.projectService.saveProject(this.projectForm.value, this.projectId).subscribe(
      response => {
        this.successMessage = msg;
      },
      error => {
        this.errorMessage = error.message;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
