import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/mocks/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/components/heroes/heroes.component';
import { HeroDetailComponent } from './heroes/components/hero-detail/hero-detail.component';
import { LabelComponent } from './heroes/components/label/label.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './shared/components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './heroes/components/hero-search/hero-search.component';
import { HeroTypeComponent } from './heroes/components/hero-type/hero-type.component';
import { TasksModule } from './tasks/tasks.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    LabelComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroTypeComponent
  ],
  imports: [
    TasksModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false }
    ),
    SharedModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
