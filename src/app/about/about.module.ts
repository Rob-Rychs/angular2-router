import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from  './about.component';
import { AboutUserComponent } from  '../about-user/about-user.component';
import { AboutSectionComponent } from './about-section.component';
import { UserService } from '../shared/services/user.service';
import { aboutRouting } from './about.routing';
import { AboutUsersResolve } from './about-resolve.service';

@NgModule({
  imports: [
    aboutRouting,
    CommonModule
  ],
  declarations: [
    AboutComponent,
    AboutUserComponent,
    AboutSectionComponent
  ],
  providers: [
    UserService,
    AboutUsersResolve
  ]
})
export class AboutModule {}
