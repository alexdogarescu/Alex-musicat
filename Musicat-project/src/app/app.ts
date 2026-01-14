import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PlayerComponent } from './components/player/player';
import { UserProfile } from "./components/user-profile/user-profile";
// HERE IMPORT COMPONENTS YOU WANT TO USE IN THE APP HTML


@Component({
  selector: 'app-root',
  standalone: true,
  // 2. ADD IT TO THIS LIST SO THE HTML CAN USE IT
  imports: [RouterOutlet, RouterLink, PlayerComponent], //ALSO ADD HERE COMPONENTS
  templateUrl: './app.html',
  styleUrl: './app.css' // Note: verify if your file is app.css or app.scss

})
export class App {
  title = 'my-music-app';
}                                         