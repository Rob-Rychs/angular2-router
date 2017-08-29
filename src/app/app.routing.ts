import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutUserComponent } from './about-user/about-user.component';

const appRoutes: Routes = [
  // redirect home page to about page
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  // { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/:username', component: AboutUserComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);