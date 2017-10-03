import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, enableProdMode } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule} from '@angular/http';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { HttpStorage } from '../providers/httpstorage';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { BookPage } from '../pages/book/book';
import { LivePage } from '../pages/live/live';
import { VideoPage } from '../pages/video/video';
import { MinePage } from '../pages/mine/mine';
import { ListPage } from '../pages/list/list';
import { ListsPage } from '../pages/lists/lists';
import { SimuPage } from '../pages/simu/simu';
import { RecordPage } from '../pages/record/record';
import { ListDPage } from '../pages/listd/listd';
import { ExamPage } from '../pages/exam/exam';
import { FramePage } from '../pages/frame/frame';
import { FilePage } from '../pages/file/file';
import { NotePage } from '../pages/note/note';
import { NullPage } from '../pages/null/null';
import { ScorePage } from '../pages/score/score';
import { DtkPage } from '../pages/dtk/dtk';
import { FindPage } from '../pages/find/find';
import { MsgPage } from '../pages/msg/msg';
import { ErrorPage } from '../pages/error/error';
import { SendPage } from '../pages/send/send';
import { PlayPage } from '../pages/play/play';

enableProdMode();
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    HomePage,
    BookPage,
    LivePage,
    VideoPage,
    MinePage,
    ListPage,
    ListsPage,
    SimuPage,
    RecordPage,
    ListDPage,
    NotePage,
    ExamPage,
    FramePage,
    FilePage,
    NullPage,
    ScorePage,
    DtkPage,
    FindPage,
    MsgPage,
    ErrorPage,
    SendPage,
    PlayPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    //IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true',
      backButtonText: '',
      //backButtonIcon: 'md-arrow-back',
      swipeBackEnabled: true,
      tabsPlacement: 'bottom',
      mode:'ios'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    HomePage,
    BookPage,
    LivePage,
    VideoPage,
    MinePage,
    ListPage,
    ListsPage,
    SimuPage,
    RecordPage,
    ListDPage,
    NotePage,
    ExamPage,
    FramePage,
    FilePage,
    NullPage,
    ScorePage,
    DtkPage,
    FindPage,
    MsgPage,
    ErrorPage,
    SendPage,
    PlayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Transfer,
    TransferObject,
    File,
    HttpStorage
  ]
})
export class AppModule {}
