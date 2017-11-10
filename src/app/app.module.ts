import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
