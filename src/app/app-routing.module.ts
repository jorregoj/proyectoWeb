import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { MainpageComponent } from "./pages/mainpage/mainpage.component";
import { RegEquipoComponent } from "./pages/reg-equipo/reg-equipo.component";
import { ServiciosComponent } from "./pages/servicios/servicios.component";


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'contactus', component: ContactusComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: '',redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component:LoginComponent},
    {path: 'mainpage', component:MainpageComponent},
    {path: 'registro-equipo', component:RegEquipoComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}