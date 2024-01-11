import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './components/callback/callback.component';
import { LoginComponent } from './components/login/login.component';
import { MusicSearchComponent } from './components/music-search/music-search.component';

const routes: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: '', component: LoginComponent },
  { path: 'search', component: MusicSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
