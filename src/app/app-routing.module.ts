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
import { Child01Component } from './child01/child01.component';
import { AiGridComponent } from './ai-grid/ai-grid.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'address', component: AddressComponent,
    children: [{
    path: 'child', component:Child01Component
  }]},
  {path:'nav', component: NavComponent},
  {path: 'one', component: Tailwind01Component},
  {path: 'two', component: Tailwind02Component},
  {path: 'dash', component: DashComponent,
    children: [{
      path: 'child', component:Child01Component
  }]
  },
  {path: 'drag', component: DragDropComponent},
  {path: 'pictures', component: PicturesComponent},
  {path: 'flex', component: FlexFormComponent},
  {path: 'grid', component: GridFormComponent},
  {path: 'ai-grid', component: AiGridComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
