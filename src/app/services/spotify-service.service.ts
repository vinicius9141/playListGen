import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private baseUrl: string = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('spotify_access_token');
    return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  }

  searchTracks(query: string) {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.baseUrl}/search`, { params: { q: query, type: 'track' }, headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(error: HttpErrorResponse) {

    console.error('An error occurred:', error.error.message);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  
  createPlaylist(userId: string, name: string, description: string) {
    const headers = this.getHeaders();
    const url = `${this.baseUrl}/users/${userId}/playlists`;
    const body = { name: name, description: description };
  
    return this.http.post(url, body, { headers: headers });
  }
  
  getUserProfile() {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.baseUrl}/me`, { headers: headers });
  }

  addTracksToPlaylist(playlistId: string, trackUris: string[]) {
    const headers = this.getHeaders();
    const url = `${this.baseUrl}/playlists/${playlistId}/tracks`;
    const body = { uris: trackUris };
  
    return this.http.post(url, body, { headers: headers });
  }
  

  createPlaylistWithTracks(userId: string, name: string, description: string, trackUris: string[]): Observable<any> {
    const headers = this.getHeaders();
    const url = `${this.baseUrl}/users/${userId}/playlists`;
    const body = {
      name: name,
      description: description,
      uris: trackUris // URIs das faixas para adicionar à playlist
    };
  
    return this.http.post(url, body, { headers: headers });
  }



}