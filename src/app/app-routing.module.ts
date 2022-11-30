import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallerInnerComponent } from './component/iphone-body/home-screen/caller/caller-inner/caller-inner.component';
import { CallerComponent } from './component/iphone-body/home-screen/caller/caller.component';
import { HomeScreenComponent } from './component/iphone-body/home-screen/home-screen.component';
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
