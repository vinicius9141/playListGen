import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private showPlaylistCreate = new BehaviorSubject<boolean>(false);
  private playlistIdSource = new BehaviorSubject<string>('');

  setPlaylistId(playlistId: string) {
    this.playlistIdSource.next(playlistId);
  }

  getPlaylistId(): Observable<string> {
    return this.playlistIdSource.asObservable();
  }

  setShowPlaylistCreate(show: boolean) {
    this.showPlaylistCreate.next(show);
  }

  getShowPlaylistCreate() {
    return this.showPlaylistCreate.asObservable();
  }
}