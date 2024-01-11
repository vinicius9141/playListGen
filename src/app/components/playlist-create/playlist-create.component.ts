import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify-service.service';



@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrl: './playlist-create.component.scss'
})
export class PlaylistCreateComponent {
  playlistName: string = '';
  playlistDescription: string = '';

  constructor(private spotifyService: SpotifyService) {}

  createPlaylist() {
    if (!this.playlistName) {
      alert('Por favor, insira um nome para a playlist.');
      return;
    }

    this.spotifyService.createPlaylist(this.playlistName, this.playlistDescription).subscribe(
      response => {
        console.log('Playlist criada:', response);
      },
      error => {
        console.error('Erro ao criar a playlist:', error);
      }
    );
  }
}