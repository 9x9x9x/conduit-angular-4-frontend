import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
//import { HomeComponent } from './home/home.component';
import {
  ApiService,
  UserService, 
  SharedModule,
  FooterComponent,
  HeaderComponent,
 } from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    SharedModule,
    HomeModule,
    rootRouting,
  ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
