import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  {
    component: HomeComponent, path: 'home'
  },
  {
    path: '', pathMatch: 'full', component: HomeComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
