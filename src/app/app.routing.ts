import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';


const appRoutes: Routes = [
  // commentee out redirect home page to about page
  // {
  //   path: '',
  //   redirectTo: '/about',
  //   pathMatch: 'full'
  // },
  { path: '', component: HomeComponent },
 
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);