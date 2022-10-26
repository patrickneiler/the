import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
} from '@firebase/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from 'contentful';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private readonly firestore: AngularFirestore) {}

  getAll<T extends { [x: string]: any }>(_collection: string) {
    this.firestore
      .collection(_collection)
      .valueChanges()
      .subscribe((event) => console.log(event));
    return this.firestore.collection(_collection).valueChanges() as Observable<
      T[]
    >;
  }

  get<T extends { [x: string]: any }>(_collection: string, id: string) {
    const entityDocumentReference = this.firestore.doc<T>(
      `${_collection}/${id}`
    );
    return entityDocumentReference.valueChanges();
  }

  create<T extends { [x: string]: any }>(_collection: string, entity: T) {
    const collection = this.firestore.collection<T>(_collection);
    return collection.add(entity);
  }

  delete(_collection: string, id: string) {
    const entityDocumentReference = this.firestore.doc(`${_collection}/${id}`);
    return entityDocumentReference.delete();
  }

  // collectionRef(_collection: string): CollectionReference<DocumentData> {
  //   return collection(this.firestore, _collection);
  // }
}
