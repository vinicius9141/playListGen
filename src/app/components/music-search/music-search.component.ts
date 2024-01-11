import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify-service.service';
import { StateService } from '../../shared/state.service';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrl: './music-search.component.scss'
})
export class MusicSearchComponent {
  searchTerm: string = '';
  searchResults: any[] = []; 
  playlistId: string = '';


  constructor(private spotifyService: SpotifyService, public stateService: StateService) {  }
  showPlaylistCreate: boolean = false;

  ngOnInit() {
    this.stateService.getPlaylistId().subscribe(id => {
      this.playlistId = id;
    });
  }

  
  search() {
    if (!this.searchTerm) {
      return;
    }

    this.spotifyService.searchTracks(this.searchTerm).subscribe(
      (data) => {
        this.searchResults = data.tracks.items; 
        
      },
      (error) => {
    
        console.error(error);
      }
    );
    this.showPlaylistCreate = true
  }

  addToPlaylist() {
    if (!this.playlistId) {
      alert('Por favor, crie uma playlist primeiro.');
      return;
    }
    const selectedTracks = this.searchResults.filter(track => track.selected).map(track => track.uri);
    this.spotifyService.addTracksToPlaylist(this.playlistId, selectedTracks).subscribe(
   
    );
  }
}