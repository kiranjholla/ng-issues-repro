import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestModule } from 'my-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestModule.forRoot({
      test: 'Test1'
    }, {
      test: 'Test2'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
