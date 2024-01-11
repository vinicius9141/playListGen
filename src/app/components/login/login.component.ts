import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
constructor() {}

  
  login() {
    const clientId = '85484136d0f5441ca5477493c99f5b3e';
    const redirectUri = encodeURIComponent('http://localhost:4200/callback');
    const scopes = [
      'playlist-modify-public',
      'playlist-modify-private',
      // outros escopos conforme necessário
    ];
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&show_dialog=true`;
    window.location.href = url;
  }
}
