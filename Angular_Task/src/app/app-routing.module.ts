import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebApiComponent } from './web-api/web-api.component';
import { AboutComponent } from './about/about.component';
import { ModuleHomeComponent } from './Direct-Home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StartupComponent } from './startup/startup.component';
import { ForEachComponent } from './for-each/for-each.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { ModuleTaskComponent } from './module-task/module-task.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { authenticateGuard } from './Core/authenticate.guard';
import { MaterialDataTabelComponent } from './material-data-tabel/material-data-tabel.component';
import { SearchingComponent } from './searching/searching.component';
import { ThemeComponent } from './theme/theme.component';
import { DatatableComponent } from './datatable/datatable.component';
import { TimerComponent } from './timer/timer.component';
import { AuthGuard } from './Core/module.guard';

const routes: Routes = [
  { path: 'directive_home', component: ModuleHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'web-api', component: WebApiComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [AuthGuard],
    // canActivate:[authenticateGuard],
    data: { roles: ['user', 'admin', 'supervisor'] },
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
      canLoad: [AuthGuard],
      data: { roles: ['supervisor'] },
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./category/category.module').then((m) => m.CategoryModule),
    canLoad: [AuthGuard],
    data: { roles: ['admin', 'supervisor'] },
  },
  { path: 'mat-table', component: MaterialDataTabelComponent },
  { path: 'startup', component: StartupComponent },
  { path: 'module-task', component: ModuleTaskComponent },
  { path: 'foreach', component: ForEachComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'search', component: SearchingComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'timer', component: TimerComponent },
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
