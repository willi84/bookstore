import { BookModule } from './book/book.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MousePositionComponent } from './mouse-position/mouse-position.component';
import { TitleBoxComponent } from './title-box/title-box.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { routing  } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MousePositionComponent,
    TitleBoxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BookModule,
    BrowserAnimationsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
