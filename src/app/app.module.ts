import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from '@angular/material';

import {SidebarModule} from './sidebar/sidebar.module';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';

import { SaleService } from './sales/sale.service';
import { AuthenticateService } from './login/loginService/authenticate.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        SidebarModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        SalesComponent
    ],
    providers: [ AuthenticateService , SaleService],
    bootstrap: [AppComponent]
})
export class AppModule { }
