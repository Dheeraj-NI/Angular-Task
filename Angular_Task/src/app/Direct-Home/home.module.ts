import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ModuleHomeComponent } from './home.component';

@NgModule({
  declarations: [ModuleHomeComponent],
  imports: [CommonModule, HttpClientModule, ],
})
export class HomeModule {}
