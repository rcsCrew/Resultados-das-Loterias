import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './pages/hub/hub.component';
import { HttpClientModule } from '@angular/common/http';  // Correção aqui

@NgModule({
  declarations: [
    AppComponent,
    HubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Correção aqui
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
