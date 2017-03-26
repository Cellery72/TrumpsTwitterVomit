import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HelpModal } from '../pages/home/modal/help-modal.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
// services(providers)
import { TwitterConnect } from '@ionic-native/twitter-connect';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HelpModal,
    DashboardPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelpModal,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TwitterConnect,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
