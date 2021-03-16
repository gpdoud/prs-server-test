import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BaseUrlComponent } from './components/base-url/base-url.component';
import { UserControllerTestComponent } from './components/user-controller-test/user-controller-test.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseUrlComponent,
    UserControllerTestComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
