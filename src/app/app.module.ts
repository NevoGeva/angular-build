import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencySignPipe } from './pipes/currency-sign.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
    AppComponent,
  
    CurrencySignPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
