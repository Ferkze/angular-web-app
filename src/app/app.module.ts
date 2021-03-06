import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { WineDetailsComponent } from './wine-details/wine-details.component';
import { WineService } from './services/wine.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WineDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [
    WineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
