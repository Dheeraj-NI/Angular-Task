import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMaterialModule } from '../ang-material/ang-material.module';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from '../app.module';



const routes: Routes = [
 
  {path:'register',component:RegisterComponent},
];
@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngMaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers:[]
  
})
export class RegisterModule {


}
