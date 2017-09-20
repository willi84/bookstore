import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MousePositionComponent } from './mouse-position/mouse-position.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    MousePositionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
