import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirestoreService } from './firestore/firestore.service';

export const environment = {
  firebase: {
    config: {
      apiKey: 'AIzaSyCRTV9r16bu-ScHuA7pWNZn9_-ldkHNmaM',
      authDomain: 'hexatomic-apps.firebaseapp.com',
      projectId: 'hexatomic-apps',
      storageBucket: 'hexatomic-apps.appspot.com',
      messagingSenderId: '148383614374',
      appId: '1:148383614374:web:37add9be20d9eef63ffb67',
      measurementId: 'G-12BHTZ63C2',
    },
  },
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [FirestoreService],
})
export class UtilityFirebaseModule {}
