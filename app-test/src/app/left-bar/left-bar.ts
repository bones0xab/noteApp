import { Component} from '@angular/core';
import { NotesService } from '../services/notes';
import { CommonModule,  } from '@angular/common';
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-left-bar',
  imports: [CommonModule, RouterModule ],
  standalone: true,
  templateUrl: './left-bar.html',
  styleUrls: ['./left-bar.css'], 
})

export class LeftBar {
  notes$: Observable<Note[]>; // ✅ Explicit type
  constructor(private notesService: NotesService) {
    this.notes$ = this.notesService.getNotes();
  }  
  sidebarVisible = false;
}
