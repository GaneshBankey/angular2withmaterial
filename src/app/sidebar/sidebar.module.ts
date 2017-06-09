import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { 
         MdMenuModule,
         MdIconModule
        } from '@angular/material';

@NgModule({
    imports: [ RouterModule, CommonModule, MdMenuModule,
         MdIconModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ]
})

export class SidebarModule {}