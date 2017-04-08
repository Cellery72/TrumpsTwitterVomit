import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

// components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HelpModal } from '../pages/home/modal/help-modal.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TrumpsTweetsPage } from '../pages/trumps-tweets/trumps-tweets';
import { TweetComponent } from '../pages/trumps-tweets/tweet/tweet.component';
import { NotificationComponent } from '../pages/dashboard/notification/notification.component';
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
    NotificationComponent,
    TweetComponent
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
    NotificationComponent,
    TweetComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TwitterService,
    TwitterConnect,
    NativeStorage,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LocalNotifications,
  ]
})
export class AppModule { }
