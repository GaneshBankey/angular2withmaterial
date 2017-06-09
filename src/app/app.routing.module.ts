import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login/login.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
    {   path: '',   redirectTo: 'login',   pathMatch: 'full' },
    {   path: 'login', component : LoginComponent, pathMatch: 'full' },
    {   path: 'dashboard', component : DashboardComponent },
    {   path: 'sales', component : SalesComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
