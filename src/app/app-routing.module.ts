import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TenantsComponent } from './tenants/tenants.component';
import { BedroomsComponent } from './bedrooms/bedrooms.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},

  {path:"home", component:HomeComponent},
  {path:"tenants", component:TenantsComponent},
  {path:"bedrooms", component:BedroomsComponent},

  {path:"**", component:NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
