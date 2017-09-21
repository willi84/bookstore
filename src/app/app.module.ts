import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookDataService } from './shared/book-data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MousePositionComponent } from './mouse-position/mouse-position.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { BookListComponent } from './book-list/book-list.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { routing  } from './book-list/book-list.routing';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MousePositionComponent,
    TitleBoxComponent,
    BookListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule
  ],
 
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
