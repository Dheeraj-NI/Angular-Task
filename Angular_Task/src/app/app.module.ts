import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { ModuleTaskComponent } from './module-task/module-task.component';
import { DirDirective } from './directive/dir.directive';
import { Permission } from './Core/authenticate.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MaterialDataTabelComponent } from './material-data-tabel/material-data-tabel.component';
import { SearchingComponent } from './searching/searching.component';
import { ThemeComponent } from './theme/theme.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTablesModule } from 'angular-datatables';
import { TimerComponent } from './timer/timer.component';
import { ModuleService } from './Core/module.service';
import { HomeModule } from './home/home.module';
import {MatToolbarModule} from  '@angular/material/toolbar'

@NgModule({
  declarations: [
    AppComponent,
    WebApiComponent,
    EllipsesPipe,
    StartupComponent,
    ForEachComponent,
    ParentComponent,
    ChildComponent,
    PipeComponent,
    ModuleTaskComponent,
    DirDirective,
    RegisterComponent,
    LoginComponent,
    
    MaterialDataTabelComponent,
    SearchingComponent,
    ThemeComponent,
    DatatableComponent,
    TimerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    DataTablesModule,
    MatToolbarModule,
    HomeModule
  ],
  providers: [ApiServiceService, Permission, LoginComponent, ModuleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
