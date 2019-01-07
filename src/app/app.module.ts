import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CarouselModule } from 'ngx-bootstrap/carousel'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './home/album/album.component';
import { ItemComponent } from './home/album/item/item.component';
import { OverlayComponent } from './home/album/overlay/overlay.component';
import { FurnitureNameStripPipe } from './furniture-name-strip.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumComponent,
    ItemComponent,
    OverlayComponent,
    FurnitureNameStripPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
