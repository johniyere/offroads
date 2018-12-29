import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';
import { AuthGuard } from '../core/auth/auth.guard';

const editorRoutes: Routes = [
  {
    path: '',
    component: EditorComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(editorRoutes)],
  exports: [RouterModule],
  declarations: [],
})
export class EditorRoutingModule { }
