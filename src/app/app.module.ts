import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncComponent } from './async/async.component';
import { FileSizeComponent } from './file-size/file-size.component';
import { FileSizePipe } from './file-size/file-size.pipe';
import { HomeComponent } from './home.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingPipe } from './loading/loading.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileSizeComponent,
    AsyncComponent,
    LoadingComponent,
    
    FileSizePipe,
    LoadingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
