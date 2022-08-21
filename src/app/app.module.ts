import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeBlockComponent } from './Common/code-block/code-block.component';
import { MainFooterComponent } from './Common/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeBlockComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
