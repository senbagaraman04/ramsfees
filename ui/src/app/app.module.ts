import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DialogModule } from 'primeng/dialog';


import { RamsDashbaordComponent } from './pages/components/rams-dashbaord/rams-dashbaord.component';
import { HttpClientModule } from '@angular/common/http';
import { RamsTeacherComponent } from './pages/components/rams-teacher/components/rams-teacher-list/rams-teacher.component';
import { InputTextModule } from 'primeng/inputtext';
import { AddTeacherFormComponent } from './pages/components/rams-teacher/components/add-teachers-form/add-teacher-form.component';



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
    MultiSelectModule,
    DialogModule,
    BrowserModule,
    ReactiveFormsModule,
    InputTextModule
 
],
  declarations: [ 
    AppComponent, 
    RamsSidebarComponent,
    RamsDashbaordComponent,
    RamsTeacherComponent,
    AddTeacherFormComponent
 ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }