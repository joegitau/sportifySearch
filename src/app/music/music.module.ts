import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { TracksComponent } from './tracks/tracks.component';
import { AlbumsComponent } from './albums/albums.component';
import { ArtistsComponent } from './artists/artists.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [TracksComponent, AlbumsComponent, ArtistsComponent, SearchComponent],
  imports: [
    CommonModule,
    MusicRoutingModule
  ],
})
export class MusicModule { }
