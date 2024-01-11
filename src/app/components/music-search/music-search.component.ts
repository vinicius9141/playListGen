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

  constructor(private spotifyService: SpotifyService, public stateService: StateService) {  }
  showPlaylistCreate: boolean = false;

  
  search() {
    if (!this.searchTerm) {
      // Mostrar algum aviso se a caixa de pesquisa estiver vazia
      return;
    }

    this.spotifyService.searchTracks(this.searchTerm).subscribe(
      (data) => {
        this.searchResults = data.tracks.items; 
        
      },
      (error) => {
        // Tratar erros aqui
        console.error(error);
      }
    );
    this.showPlaylistCreate = true
  }
}