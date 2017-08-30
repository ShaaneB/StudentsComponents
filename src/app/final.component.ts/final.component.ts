import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AddButtonComponents } from './addbutton.components';

@NgModule({
  declarations: [
   AddButtonComponents
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AddButtonComponents]
})
export class AppModule { }
