import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HelpModal } from '../pages/home/modal/help-modal.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TrumpsTweetsPage } from '../pages/trumps-tweets/trumps-tweets';
// services(providers)
import { TwitterConnect } from '@ionic-native/twitter-connect';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HelpModal,
    DashboardPage,
    TrumpsTweetsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelpModal,
    DashboardPage,
    TrumpsTweetsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TwitterConnect,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
