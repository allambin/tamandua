import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class ConfirmDeleteService {

  private hasConfirmed = new Subject<boolean>();
  public hasConfirmed$: Observable<boolean> = this.hasConfirmed.asObservable();

  constructor() { }

  public showConfirmDialog() {}
  
  cancel() {
    this.hasConfirmed.next(false);
  }

  confirm() {
    this.hasConfirmed.next(true);
  }

}
