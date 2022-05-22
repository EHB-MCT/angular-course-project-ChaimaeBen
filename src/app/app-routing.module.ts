import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/Home.component';
import { DetailpageComponent } from './pages/detailpage/detailpage.component';
import { DetailpageShowComponent } from './pages/detailpage-show/detailpage-show.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail-movie/:id', component: DetailpageComponent },
  { path: 'detail-show/:id', component: DetailpageShowComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
