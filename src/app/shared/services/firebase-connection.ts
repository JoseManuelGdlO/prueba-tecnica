import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/categories.interface';
import { COLLECTION_FIREBASE } from '../utils/reservate-words';

@Injectable({
  providedIn: 'root',
})
export class FirebaseConnectionService {
  constructor(private firestore: Firestore) {}

  getCategories(): Observable<ICategory[]> {
    const categoriesRef = collection(this.firestore, COLLECTION_FIREBASE);
    return collectionData(categoriesRef, { idField: 'id' }) as Observable<
      ICategory[]
    >;
  }
}
