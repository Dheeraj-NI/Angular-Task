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

const routes: Routes = [
  { path: 'directive_home', component: ModuleHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'web-api', component: WebApiComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'home', component: HomeComponent, canActivate: [authenticateGuard] },
  // { path: 'mat-table', component: MaterialDataTabelComponent },
  { path: 'startup', component: StartupComponent },
  // { path: 'module-task', component: ModuleTaskComponent },
  { path: 'foreach', component: ForEachComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'pipe', component: PipeComponent },
  

  {
    path: '',
    redirectTo: '/startup',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
