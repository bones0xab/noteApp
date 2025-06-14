import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { LeftBar } from '../left-bar/left-bar';
import { App } from "../app";

@Component({
  selector: 'app-add-view',
  standalone: true,
  imports: [CommonModule, FormsModule, LeftBar,RouterModule],
  templateUrl: './add-view.html',
  styleUrls: ['./add-view.css']
})


export class AddView {sidebarVisible = false;
[x: string]: any;
  // Inject Firestore service
  private firestore: Firestore = inject(Firestore);
  // Variable to store note content
  noteContent: string = '';
  noteTitle: string = '';

  
  // Function to save note to Firebase
  async saveNote() {
    if (!this.noteContent.trim()) return; // Don't save empty notes
    
    try {
      // Create a reference to the 'notes' collection
      const notesCollection = collection(this.firestore, 'notes');
      
      // Add a new document with the note content
      await addDoc(notesCollection, {
        title : this.noteTitle,
        content: this.noteContent,
        createdAt: new Date() // Add timestamp
      });
      
      // Reset textarea after saving
      this.noteContent = '';
      this.noteTitle = '';
      
      // Optional: Show success message
      alert('Note saved successfully!');
    } catch (error) {
      console.error('Error saving note: ', error);
      alert('Error saving note. Check console for details.');
    }
  }
}