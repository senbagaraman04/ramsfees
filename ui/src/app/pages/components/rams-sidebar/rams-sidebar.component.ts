import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-rams-sidebar',
  templateUrl: './rams-sidebar.component.html',
  styleUrl: './rams-sidebar.component.scss'
})
export class RamsSidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

    closeCallback(e: Event): void {
        this.sidebarRef.close(e);
    }

    sidebarVisible: boolean = false;
}
