import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { AppComponent } from './app.component';

import { RamsSidebarComponent } from './pages/components/rams-sidebar/rams-sidebar.component';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CardModule } from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';


import { RamsDashbaordComponent } from './pages/components/rams-dashbaord/rams-dashbaord.component';
import { RamsTeacherComponent } from './pages/components/rams-teacher/rams-teacher.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports:[
    //Angular
    BrowserModule, 
    FormsModule,  
    BrowserAnimationsModule,
    RouterModule.forRoot(routes), 
    HttpClientModule,

    //Prime-ng Modules
    SidebarModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    CardModule,
    TableModule,
    ToastModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule

],
  declarations: [ 
    AppComponent, 
    RamsSidebarComponent,
    RamsDashbaordComponent,
    RamsTeacherComponent
 ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }