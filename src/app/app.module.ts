import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BookDataService } from './shared/book-data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MousePositionComponent } from './mouse-position/mouse-position.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { BookListComponent } from './book-list/book-list.component';
import { routing  } from './book-list/book-list.routing';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MousePositionComponent,
    TitleBoxComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
