import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Note } from '../models/note.model';
import { NotesService } from '../services/notes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-note',
  imports : [CommonModule],
  templateUrl: './show-note.html',
  styleUrls: ['./show-note.css']
})
export class ShowNoteComponent implements OnInit {
  note$!: Observable<Note | undefined>;

  constructor(
    private noteserv: NotesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.note$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.noteserv.getNoteById(id!);
      })
    );
  }
}
