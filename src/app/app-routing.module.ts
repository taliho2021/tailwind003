import { RouterModule, Routes } from '@angular/router';

import { AddressComponent } from './address/address.component';
import { DashComponent } from './dash/dash.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { FlexFormComponent } from './flex-form/flex-form.component';
import { GridFormComponent } from './grid-form/grid-form.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { PicturesComponent } from './pictures/pictures.component';
import { Tailwind01Component } from './tailwind01/tailwind01.component';
import { Tailwind02Component } from './tailwind02/tailwind02.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'address', component: AddressComponent},
  {path:'nav', component: NavComponent},
  {path: 'one', component: Tailwind01Component},
  {path: 'two', component: Tailwind02Component},
  {path: 'dash', component: DashComponent},
  {path: 'drag', component: DragDropComponent},
  {path: 'pictures', component: PicturesComponent},
  {path: 'flex', component: FlexFormComponent},
  {path: 'grid', component: GridFormComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
