import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MusicSearchComponent } from './components/music-search/music-search.component';
import { MusicListComponent } from './components/music-list/music-list.component';
import { PlaylistCreateComponent } from './components/playlist-create/playlist-create.component';
import { FormsModule } from '@angular/forms';
import { CallbackComponent } from './components/callback/callback.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MusicSearchComponent,
    MusicListComponent,
    PlaylistCreateComponent,
    CallbackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
