import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//Routes
import { APP_ROUTING} from './app.routes';
//SERVICES
import {CoinmonitorService} from './servicios/coinmonitor.service';
//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
  ],
  providers: [
    CoinmonitorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
