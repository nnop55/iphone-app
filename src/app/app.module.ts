import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IphoneBodyComponent } from './component/iphone-body/iphone-body.component';
import { LockScreenComponent } from './component/iphone-body/lock-screen/lock-screen.component';
import { HomeScreenComponent } from './component/iphone-body/home-screen/home-screen.component';
import { DatePipe } from '@angular/common';
import { BatteryModalComponent } from './component/iphone-body/battery-modal/battery-modal.component';
import { CallerComponent } from './component/iphone-body/home-screen/caller/caller.component';
import { FormsModule } from '@angular/forms';
import { CallerInnerComponent } from './component/iphone-body/home-screen/caller/caller-inner/caller-inner.component';
import { SettingsComponent } from './component/iphone-body/home-screen/settings/settings.component';
import { WifiComponent } from './component/iphone-body/home-screen/settings/wifi/wifi.component';
import { SafariComponent } from './component/iphone-body/home-screen/safari/safari.component';
import { TurnWifiAlertComponent } from './component/iphone-body/home-screen/turn-wifi-alert/turn-wifi-alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RickMortyComponent } from './component/iphone-body/home-screen/safari/rick-morty/rick-morty.component';
import { NarutoComponent } from './component/iphone-body/home-screen/safari/naruto/naruto.component';
import { RickMortyInnerComponent } from './component/iphone-body/home-screen/safari/rick-morty/rick-morty-inner/rick-morty-inner.component';
import { LoadingComponent } from './component/shared/loading/loading.component';
import { LoadingService } from './services/loading.service';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './component/iphone-body/home-screen/iphonecamera/camera/camera.component';
import { PhotoComponent } from './component/iphone-body/home-screen/iphonecamera/photo/photo.component';
import { MessageComponent } from './component/iphone-body/home-screen/message/message.component';
import { CalculatorComponent } from './component/iphone-body/home-screen/calculator/calculator.component';
import { HotelMainComponent } from './component/iphone-body/home-screen/hotel-app/hotel-main/hotel-main.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { HotelCardComponent } from './component/iphone-body/home-screen/hotel-app/hotel-card/hotel-card.component';
import { HotelInnerComponent } from './component/iphone-body/home-screen/hotel-app/hotel-inner/hotel-inner.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './component/iphone-body/home-screen/hotel-app/google-map/google-map.component';
import { FilterDrawerComponent } from './component/iphone-body/home-screen/hotel-app/hotel-card/filter-drawer/filter-drawer.component';


const angularModule = [
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule
]




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
    LoadingComponent,
    CameraComponent,
    PhotoComponent,
    MessageComponent,
    CalculatorComponent,
    HotelMainComponent,
    HotelCardComponent,
    HotelInnerComponent,
    GoogleMapComponent,
    FilterDrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularModule,
    FormsModule,
    HttpClientModule,
    WebcamModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })
  ],
  providers: [DatePipe,
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
