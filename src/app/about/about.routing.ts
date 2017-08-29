import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';import { AboutComponent } from  './about.component';
import { AboutUserComponent } from  '../about-user/about-user.component';
import { AboutSectionComponent } from './about-section.component';

const aboutRoutes: Routes = [
  // child routing
  { path: 'about',
  component: AboutSectionComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      },
      {
        path: ':username',
        component: AboutUserComponent
      }
    ]
  }
  // examples of standard routing  
  // { path: 'about', component: AboutComponent },
  // { path: 'about/:username', component: AboutUserComponent },
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes)