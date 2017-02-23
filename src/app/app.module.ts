import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LocalStorageService } from './local-storage-service/local-storage.service';
import { GameComponent, PlayerComponent, ScoreboardComponent } from './components';


@NgModule({
  declarations: [
    GameComponent,
    ScoreboardComponent,
    PlayerComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
