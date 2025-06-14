import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { LeftBar } from '../left-bar/left-bar';
import { doc, deleteDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-show-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-view.html',
  styleUrls: ['./show-view.css']
})

export class ShowView {
  private firestore: Firestore = inject(Firestore);
  
  // Get notes as observable
  notes$ = collectionData(
    collection(this.firestore, 'notes'),
    { idField: 'id' } // Include document ID
  ).pipe(
    map(notes => 
      notes.sort((a: any, b: any) => 
        b.createdAt.toDate() - a.createdAt.toDate()
      )
    )
  );

  // Add to the ShowViewComponent class
async deleteNote(id: string) {
  if (confirm('Are you sure you want to delete this note?')) {
    try {
      const docRef = doc(this.firestore, `notes/${id}`);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting note:', error);
      alert('Could not delete note');
    }
  }
}
}

