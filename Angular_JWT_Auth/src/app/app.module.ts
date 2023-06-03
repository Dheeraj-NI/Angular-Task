import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngMaterialModule } from './ang-material/ang-material.module';
import { LoginModule } from './login/login.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTPConnectService } from './Authenticate/httpconnect.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AngMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
  ],
  exports: [],
  providers: [HTTPConnectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
