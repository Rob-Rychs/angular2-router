import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { appRouting } from './app.routing';
import { NotfoundComponent } from './notfound/notfound.component';


import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
