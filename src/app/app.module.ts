import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoItemsComponent } from './video-items/video-items.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
