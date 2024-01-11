import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify-service.service';
import { StateService } from '../../shared/state.service';



@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrl: './playlist-create.component.scss'
})
export class PlaylistCreateComponent {
  playlistName: string = '';
  playlistDescription: string = '';
  playlistId: string = '';
  trackUris: string[] = []; 

  constructor(private spotifyService: SpotifyService, private stateService: StateService) {}




  createPlaylist(trackUris: string[]) {
    if (!this.playlistName) {
      alert('Por favor, insira um nome para a playlist.');
      return;
    }
  
    this.spotifyService.getUserProfile().subscribe(
      userProfile => {
        const userId = userProfile.id; // Obter o userId
        // Agora que você tem o userId, chame o método para criar a playlist
        this.spotifyService.createPlaylist(userId, this.playlistName, this.playlistDescription).subscribe(
          (response:any) => {
            this.stateService.setPlaylistId(response.id);
            console.log('Playlist criada:', response);
            // Lógica adicional após a criação da playlist
          },
          error => {
            console.error('Erro ao criar a playlist:', error);
          }
        );
      },
      error => {
        console.error('Erro ao obter perfil do usuário:', error);
      }
    );
    this.spotifyService.getUserProfile().subscribe(
      userProfile => {
        this.spotifyService.createPlaylistWithTracks(userProfile.id, this.playlistName, this.playlistDescription, trackUris).subscribe(
          response => {
            console.log('Playlist criada com músicas:', response);
            // Lógica adicional após a criação da playlist
          },
          error => {
            console.error('Erro ao criar a playlist:', error);
          }
        );
      },
      error => {
        console.error('Erro ao obter perfil do usuário:', error);
      }
    );
  }
  }
