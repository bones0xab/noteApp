import { Routes } from '@angular/router';
import { AddView } from './add-view/add-view';
import { ShowView } from './show-view/show-view';
import { ShowNoteComponent } from './show-note/show-note';



export const routes: Routes = [
    {path: '', component: AddView},
    { path: 'view', component: ShowView },
    {path: 'shownote/:id', component : ShowNoteComponent}
];
