import { SearchBandComponent } from './search-band/search-band.component';
import { SearchPlayerComponent } from './search-player/search-player.component';
import { ShowsComponent } from './shows/shows.component';
import { HelpPlayerComponent } from './help-player/help-player.component';
import { HelpComponent } from './help/help.component';
import { SearchComponent } from "./search/search.component";
import { AnnounceBandComponent } from "./announce-band/announce-band.component";
import { AnnouncePlayerComponent } from "./announce-player/announce-player.component";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AnnounceComponent } from "./announce/announce.component";
import { HelpBandComponent } from './help-band/help-band.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "announce", component: AnnounceComponent },
  { path: "announce-player", component: AnnouncePlayerComponent },
  { path: "announce-band", component: AnnounceBandComponent },
  { path: "search", component: SearchComponent },
  { path: "search-player", component: SearchPlayerComponent },
  { path: "search-band", component: SearchBandComponent },
  { path: "help", component: HelpComponent },
  { path: "help-player", component: HelpPlayerComponent },
  { path: "help-band", component: HelpBandComponent },
  { path: "shows", component: ShowsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
