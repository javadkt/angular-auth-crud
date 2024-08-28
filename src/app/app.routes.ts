import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth.guard';
import {HttpClient} from '@angular/common/http';

// Define your routes
export const routes: Routes = [
  {path: 'home', component: HomeComponent}, // Add AuthGuard if needed

  /*  { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Add AuthGuard if needed
    { path: '**', redirectTo: '/login' }*/
];
