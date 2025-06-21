import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UpgradeModule
  ],
  providers: []
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    // This bootstraps AngularJS inside Angular
     this.upgrade.bootstrap(document.body, ['todoApp']);
  }
 }
