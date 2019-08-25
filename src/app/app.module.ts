import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { TipComponent } from './tip/tip.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    HeaderComponent,
    InfoComponent,
    TipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
