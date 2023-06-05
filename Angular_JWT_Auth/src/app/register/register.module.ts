import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngMaterialModule } from '../ang-material/ang-material.module';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from '../app.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [{ path: '', component: RegisterComponent }];
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngMaterialModule,

    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
})
export class RegisterModule {}
