import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ArticuloService } from '../services/articulo.services';
import { DetailtPage } from '../pages/detailt/detailt';
import { HomePage } from "../pages/home/home";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBE-tBSC_JMZEmcHB-hzblcYsVPfePfuBs",
    authDomain: "crud-5851e.firebaseapp.com",
    databaseURL: "https://crud-5851e.firebaseio.com",
    projectId: "crud-5851e",
    storageBucket: "",
    messagingSenderId: "749926041324"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailtPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailtPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticuloService,
    AngularFireAuthModule
  ]
})
export class AppModule {}
