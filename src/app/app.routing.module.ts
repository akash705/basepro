import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { RegisterComponent } from './register/register/register.component';
import { AdminComponent } from './admin/admin/admin.component';
import { DisplayComponent } from './display/display/display.component';



const appRoute:Routes =[ 
    {path:'',component:RegisterComponent},
    {path:'admin' , component:AdminComponent},
    {path  :'display',component:DisplayComponent} ,
    {path  :'**',component:RegisterComponent} 

];


@NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule
{

}