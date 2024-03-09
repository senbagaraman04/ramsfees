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
import { RamsDashbaordComponent } from './pages/components/rams-dashbaord/rams-dashbaord.component';



@NgModule({
  imports:[
    //Angular
    BrowserModule, 
    FormsModule,  
    BrowserAnimationsModule,
    RouterModule.forRoot(routes), 

    //Prime-ng Modules
    SidebarModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
   


],
  declarations: [ 
    AppComponent, 
    RamsSidebarComponent,
    RamsDashbaordComponent
 ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }