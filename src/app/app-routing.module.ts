import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses',
    // canActivate: [ AuthGuard ],
    loadChildren: () => import('./containers/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '**',
    loadChildren: () => import('./containers/page404/page404.module').then(m => m.Page404Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
