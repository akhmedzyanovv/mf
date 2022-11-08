import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule implements DoBootstrap {
  public ngDoBootstrap(appRef: ApplicationRef): void {
    const ce = createCustomElement(AppComponent, {injector: appRef.injector});
    customElements.define('angular-element', ce);
  }
}
