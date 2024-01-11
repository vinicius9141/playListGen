import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent {
  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        const params = new URLSearchParams(fragment);
        const accessToken = params.get('access_token');
        if (accessToken) {
          this.authService.setAuthStatus(true);
          localStorage.setItem('spotify_access_token', accessToken);
          this.router.navigate(['/']); 
        }
      }
    });
  }
}