import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ListOfWorksComponent } from './list-of-works/list-of-works.component';
import { CurrentWorkComponent } from './current-work/current-work.component';
import { DataTableModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    ListOfWorksComponent,
    CurrentWorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DataTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
