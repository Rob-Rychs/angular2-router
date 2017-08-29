import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';import { AboutComponent } from  './about.component';
import { AboutUserComponent } from  '../about-user/about-user.component';
import { AboutSectionComponent } from './about-section.component';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from '../about-user/about-user-resolve.service';

const aboutRoutes: Routes = [
  // child routing
  { path: '',
  component: AboutSectionComponent,
    children: [
      {
        path: '',
        component: AboutComponent,
        resolve: {
          users: AboutUsersResolve, 
        }
      },
      {
        path: ':username',
        component: AboutUserComponent,
        resolve: {
          user: AboutUserResolve
        }
      }
    ]
  }
  // examples of standard routing  
  // { path: 'about', component: AboutComponent },
  // { path: 'about/:username', component: AboutUserComponent },
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes)