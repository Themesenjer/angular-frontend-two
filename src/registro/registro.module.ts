import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AssetsLayoutModule } from '../assets-layout/assets-layout.module'; 

@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AssetsLayoutModule 
  ]
})
export class RegistroModule { }
