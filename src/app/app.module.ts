import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register/register.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DisplayComponent } from './display/display/display.component';

import {AppRoutingModule} from './app.routing.module';
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AdminComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
