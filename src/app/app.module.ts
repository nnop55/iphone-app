import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IphoneBodyComponent } from './component/iphone-body/iphone-body.component';
import { LockScreenComponent } from './component/iphone-body/lock-screen/lock-screen.component';
import { HomeScreenComponent } from './component/iphone-body/home-screen/home-screen.component';
import { DatePipe } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { BatteryModalComponent } from './component/iphone-body/battery-modal/battery-modal.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CallerComponent } from './component/iphone-body/home-screen/caller/caller.component';
import { FormsModule } from '@angular/forms';
import { CallerInnerComponent } from './component/iphone-body/home-screen/caller/caller-inner/caller-inner.component';
import { SettingsComponent } from './component/iphone-body/home-screen/settings/settings.component';
import { WifiComponent } from './component/iphone-body/home-screen/settings/wifi/wifi.component';



@NgModule({
  declarations: [
    AppComponent,
    IphoneBodyComponent,
    LockScreenComponent,
    HomeScreenComponent,
    BatteryModalComponent,
    CallerComponent,
    CallerInnerComponent,
    SettingsComponent,
    WifiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
