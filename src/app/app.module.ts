import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';





@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
