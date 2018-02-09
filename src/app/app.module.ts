import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RtPipe } from './rt.pipe';


import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';


@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    RtPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
