import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { ArtistComponent } from "./components/artist/artist.component";
import { AlbumComponent } from "./components/album/album.component";
import { ShowsComponent } from "./components/shows/shows.component";
import { SocialComponent } from "./components/social/social.component";


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'artist', component: ArtistComponent},
  { path: 'album', component: AlbumComponent},
  { path: 'shows', component: ShowsComponent},
  { path: 'social', component: SocialComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],

  declarations: [
    AppComponent,
    HomepageComponent,
    AlbumComponent,
    ShowsComponent,
    SocialComponent
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
