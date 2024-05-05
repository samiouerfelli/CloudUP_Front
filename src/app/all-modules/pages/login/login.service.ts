import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private headerState = new BehaviorSubject<boolean>(false);
  headerState$ = this.headerState.asObservable();
  private dataSource = new BehaviorSubject<any>(null);
  data = this.dataSource.asObservable();

  private imageSource = new BehaviorSubject<any>(null);
  image = this.imageSource.asObservable();
  constructor() {}
  // tslint:disable-next-line:typedef
  triggerHeaderUpdate(updated: boolean) {
    this.headerState.next(updated);
  }
  // tslint:disable-next-line:typedef
  updateData(data: any) {
    this.dataSource.next(data);
  }
  // tslint:disable-next-line:typedef
  updateImage(image: any) {
    this.imageSource.next(image);
  }
}
