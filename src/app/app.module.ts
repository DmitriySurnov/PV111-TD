import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TowerComponent } from './tower/tower.component';
import {NgOptimizedImage} from "@angular/common";
import { EnemyTestComponent } from './enemy.test/enemy.test.component';

@NgModule({
  declarations: [
    AppComponent,
    TowerComponent,
    EnemyTestComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
