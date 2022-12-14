import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeBlockComponent } from './Common/code-block/code-block.component';
import { MainFooterComponent } from './Common/main-footer/main-footer.component';
import { MainHeaderComponent } from './Common/main-header/main-header.component';
import { BasicCrudService } from './Services/basic-crud.service';

@NgModule({
  declarations: [
    AppComponent,
    CodeBlockComponent,
    MainFooterComponent,
    MainHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
