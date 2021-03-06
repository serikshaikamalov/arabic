import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Routing
import { AppRoutingModule } from './app-routing.module';

// Entry component
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
