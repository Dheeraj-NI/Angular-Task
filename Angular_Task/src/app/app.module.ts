import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebApiComponent } from './web-api/web-api.component';
import { ApiServiceService } from './Core/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartupComponent } from './startup/startup.component';
import { EllipsesPipe } from './pipe/ellipses.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ForEachComponent } from './for-each/for-each.component';

@NgModule({
  declarations: [AppComponent,  WebApiComponent, EllipsesPipe, StartupComponent, ForEachComponent, ParentComponent, ChildComponent, PipeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,
    FormsModule],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
