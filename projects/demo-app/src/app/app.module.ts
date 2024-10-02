import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomNotificationComponent } from 'projects/ngx-custom-notification/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomNotificationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
