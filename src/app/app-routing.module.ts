import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './component/iphone-body/home-screen/home-screen.component';
import { LockScreenComponent } from './component/iphone-body/lock-screen/lock-screen.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: LockScreenComponent },
      { path: 'homescreen', component: HomeScreenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
