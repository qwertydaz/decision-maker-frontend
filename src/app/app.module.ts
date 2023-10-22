import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { FootComponent } from './foot/foot.component';
import { HeadComponent } from './head/head.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FootComponent,
    HeadComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
