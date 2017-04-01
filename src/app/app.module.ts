import { NativeStorage } from '@ionic-native/native-storage';
import { NotificationComponent } from '../pages/dashboard/notification/notification.component';
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
import { TwitterService } from '../providers/twitter.service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HelpModal,
    DashboardPage,
    TrumpsTweetsPage,
    NotificationComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      mode: "md"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HelpModal,
    DashboardPage,
    TrumpsTweetsPage,
    NotificationComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TwitterService,
    TwitterConnect,
    NativeStorage,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
