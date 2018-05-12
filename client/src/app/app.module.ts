import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Let Mod know about the service you just made.
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
//Dependency Injection
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ALPHAComponent } from './alpha/alpha.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ALPHAComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
