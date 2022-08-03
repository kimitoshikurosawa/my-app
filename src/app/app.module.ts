import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FeaturedListComponent } from './features/stores/featured-list/featured-list.component';
import { PopularListComponent } from './features/stores/popular-list/popular-list.component';
import { NewestListComponent } from './features/stores/newest-list/newest-list.component';
import { StoreCardComponent } from './features/stores/store-card/store-card.component';
import {LoggerService} from "./shared/services/logger.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent,
    HeaderComponent,
    FooterComponent,
    FeaturedListComponent,
    PopularListComponent,
    NewestListComponent,
    StoreCardComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    //LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
