import { AddressComponent } from './address/address.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DashComponent } from './dash/dash.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexFormComponent } from './flex-form/flex-form.component';
import { GridFormComponent } from './grid-form/grid-form.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { PicturesComponent } from './pictures/pictures.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Tailwind01Component } from './tailwind01/tailwind01.component';
import { Tailwind02Component } from './tailwind02/tailwind02.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    NavComponent,
    Tailwind01Component,
    Tailwind02Component,
    DashComponent,
    HomeComponent,
    DragDropComponent,
    PicturesComponent,
    FlexFormComponent,
    GridFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatRadioModule,
    MatToolbarModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
