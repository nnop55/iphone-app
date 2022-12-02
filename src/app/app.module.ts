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
import { SafariComponent } from './component/iphone-body/home-screen/safari/safari.component';
import { TurnWifiAlertComponent } from './component/iphone-body/home-screen/turn-wifi-alert/turn-wifi-alert.component';
import { HttpClientModule } from '@angular/common/http';
import { RickMortyComponent } from './component/iphone-body/home-screen/safari/rick-morty/rick-morty.component';
import { NarutoComponent } from './component/iphone-body/home-screen/safari/naruto/naruto.component';
import { RickMortyInnerComponent } from './component/iphone-body/home-screen/safari/rick-morty/rick-morty-inner/rick-morty-inner.component';


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
    SafariComponent,
    TurnWifiAlertComponent,
    RickMortyComponent,
    NarutoComponent,
    RickMortyInnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
