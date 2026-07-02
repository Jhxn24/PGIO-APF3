import { Routes } from '@angular/router';
import { Login } from './componentes/login/login';
import { Empleados } from './componentes/empleados/empleados';
import { CrearSolicitud } from './componentes/crear-solicitud/crear-solicitud';
import { ListaSolicitudes } from './componentes/lista-solicitudes/lista-solicitudes';



export const routes: Routes = [
    {
        path: '',
        redirectTo: "login",
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path:"empleados",
        component: Empleados
    },
    {
        path:"crear-solicitud",
        component:CrearSolicitud
    },
    {
        path:"lista-solicitudes",
        component:ListaSolicitudes
    },
    {
        path:"**",
        redirectTo: "login"
    }
];
