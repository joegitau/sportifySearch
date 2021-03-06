import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MusicRoutingModule } from './music-routing.module';
import { TracksComponent } from './tracks/tracks.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [TracksComponent, AlbumsComponent, ArtistsComponent, SearchComponent],
  imports: [
    CommonModule,
    MusicRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class MusicModule { }
