import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { EmailSubscribeComponent } from './email-subscribe/email-subscribe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, FruitListComponent, EmailSubscribeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
