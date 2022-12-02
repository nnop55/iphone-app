import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './component/iphone-body/home-screen/calculator/calculator.component';
import { CallerInnerComponent } from './component/iphone-body/home-screen/caller/caller-inner/caller-inner.component';
import { CallerComponent } from './component/iphone-body/home-screen/caller/caller.component';
import { HomeScreenComponent } from './component/iphone-body/home-screen/home-screen.component';
import { CameraComponent } from './component/iphone-body/home-screen/iphonecamera/camera/camera.component';
import { PhotoComponent } from './component/iphone-body/home-screen/iphonecamera/photo/photo.component';
import { MessageComponent } from './component/iphone-body/home-screen/message/message.component';
import { NarutoComponent } from './component/iphone-body/home-screen/safari/naruto/naruto.component';
import { RickMortyInnerComponent } from './component/iphone-body/home-screen/safari/rick-morty/rick-morty-inner/rick-morty-inner.component';
import { RickMortyComponent } from './component/iphone-body/home-screen/safari/rick-morty/rick-morty.component';
import { SafariComponent } from './component/iphone-body/home-screen/safari/safari.component';
import { SettingsComponent } from './component/iphone-body/home-screen/settings/settings.component';
import { WifiComponent } from './component/iphone-body/home-screen/settings/wifi/wifi.component';
import { LockScreenComponent } from './component/iphone-body/lock-screen/lock-screen.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: LockScreenComponent },
      { path: 'homescreen', component: HomeScreenComponent },
      { path: 'call', component: CallerComponent },
      { path: 'call-inner', component: CallerInnerComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'wifi', component: WifiComponent },
      { path: 'safari', component: SafariComponent },
      { path: 'rickmorty', component: RickMortyComponent },
      { path: 'naruto', component: NarutoComponent },
      { path: 'character/:name', component: RickMortyInnerComponent },
      { path: 'camera', component: CameraComponent },
      { path: 'photo', component: PhotoComponent },
      { path: 'message', component: MessageComponent },
      { path: 'calculator', component: CalculatorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
