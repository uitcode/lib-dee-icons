import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeeIconsModule, DeeIconsRegistry } from 'ng-dee-icons';
import { deeIconsDashboard } from 'dee-icons';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DeeIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private deeIconsRegistry: DeeIconsRegistry) {
    deeIconsRegistry.registerIcons([deeIconsDashboard]);
  }
}
