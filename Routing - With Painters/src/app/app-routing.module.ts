import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PaintersComponent } from './painters/painters.component';
import { PainterDetailComponent } from './painter-detail/painter-detail.component';
import { ErrorComponent } from './error/error.component';
import { AdminGuard } from './admin.guard';
import { PreloadGuard } from './preload.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'painters',
    component: PaintersComponent,
    children: [
      {
        path: ':name',
        component: PainterDetailComponent,
        resolve: [PreloadGuard]
      }
    ]
  },
  { path: 'painterss', redirectTo: 'painters', pathMatch: 'full' },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
