import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngMaterialModule } from '../ang-material/ang-material.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  // {path:'login',component:LoginComponent}
  // {path:'register',component:RegisterComponent},
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngMaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  
})
export class LoginModule {}
