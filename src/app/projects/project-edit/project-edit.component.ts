import { Component, OnInit } from '@angular/core';

import { FormArray, FormGroup, FormControl, Validator, Validators, FormBuilder } from "@angular/forms";
import { Project } from '../project';

@Component({
  selector: 'tam-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  public isNew: boolean = true;
  private projectForm: FormGroup;
  private project: Project;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
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
      console.log(this.projectForm);
  }

}
