import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { appRouting } from './app.routing';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutUserComponent } from './about-user/about-user.component';
import { UserService } from './shared/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotfoundComponent,
    AboutUserComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
