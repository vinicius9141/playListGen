import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(false);

  constructor() {}

  setAuthStatus(isAuth: boolean) {
    this.authStatus.next(isAuth);
  }

  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }
}
