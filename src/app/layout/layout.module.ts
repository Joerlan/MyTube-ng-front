import { NavItemComponent } from './sidenav/nav-item/nav-item.component';
import { AngularMaterialModule } from './../angular-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    NavItemComponent
  ],
  exports: [
    LayoutComponent
  ],
})
export class LayoutModule { }