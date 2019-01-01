import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { RouteDetailsComponent } from './account/route-details/route-details.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'editor',
    loadChildren: './editor/editor.module#EditorModule',
  },
  {
    path: 'routes/:id',
    component: RouteDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
