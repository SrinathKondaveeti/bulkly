import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'about-us', loadComponent: () => import('./about-us/about-us').then(c => c.AboutUs) },
    { path: 'contact', loadComponent: () => import('./contact/contact').then(c => c.Contact) }
];
