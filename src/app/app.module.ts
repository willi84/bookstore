import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MousePositionComponent } from './mouse-position/mouse-position.component';
import { TitleBoxComponent } from './title-box/title-box.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { routing  } from './app.routing';
import { BookEditComponent } from './book/book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MousePositionComponent,
    TitleBoxComponent,
    BookEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
