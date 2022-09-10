import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'basics', loadChildren: () => import('./Feature/basics/basics.module').then(m => m.BasicsModule) },
  { path: 'dashboard', loadChildren: () => import('./Feature/dashboard/dashboard.module').then(m => m.DashboardModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
