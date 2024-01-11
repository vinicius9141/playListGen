import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private showPlaylistCreate = new BehaviorSubject<boolean>(false);

  setShowPlaylistCreate(show: boolean) {
    this.showPlaylistCreate.next(show);
  }

  getShowPlaylistCreate() {
    return this.showPlaylistCreate.asObservable();
  }
}