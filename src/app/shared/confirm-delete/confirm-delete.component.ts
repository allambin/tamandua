import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

import { ConfirmDeleteService } from './confirm-delete.service';

@Component({
  selector: 'tam-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  constructor(private confirmDeleteService: ConfirmDeleteService) { }

  ngOnInit() {
  }

  onCancel() {
    this.confirmDeleteService.cancel();
  }

  onConfirm() {
    this.confirmDeleteService.confirm();
  }

}
