import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HttpClientModule} from '@angular/common/http';
import { ImageComponent } from './image/image.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ], 
  declarations: [ AppComponent, HelloComponent, ImageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 