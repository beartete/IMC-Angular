import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // importar FormsModule

import { AppComponent } from './app.component';
import { ImcComponent } from './imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // adicionar FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
