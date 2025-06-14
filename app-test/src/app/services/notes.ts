import { inject, Injectable } from '@angular/core';
import { Firestore , collection, collectionData, addDoc, deleteDoc,doc, FieldPath, docData} from '@angular/fire/firestore';
import {  map,Observable } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})

export class NotesService {


  private firestore: Firestore = inject(Firestore);

  getNotes() : Observable<any[]>
  {
    const notesCollection = collection(this.firestore, 'notes');

    return collectionData(notesCollection, {idField: 'id'}).pipe(
      map(notes => 
        notes.sort((a: any, b: any) => {
          const dateA = a.createdAt?.toDate?.() ?? 0;
          const dateB = b.createdAt?.toDate?.() ?? 0;
          return dateB - dateA;
        })
        )
    );
  }

  async deleteNote(id: string): Promise<void> {
    const docRef = doc(this.firestore, `notes/${id}`);
    await deleteDoc(docRef);
  }

  getNoteById(id: string | null) : Observable<Note | undefined> {
    const noteDoc = doc(this.firestore, `notes/${id}`);
    return docData(noteDoc, {idField: 'id'}) as Observable<Note | undefined>;
  }
}
