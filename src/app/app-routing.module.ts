import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthGuard } from './auth/auth.guard';
import { SessionService } from './auth/auth.service';
import { HomeComponent } from './home/home-component/home.component';
import { LoginComponent } from './login/login-component/login.component'
import { ServcioexternoComponent } from './servcioexterno/servcioexterno.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  {path: 'listado', component: ServcioexternoComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SessionService, AuthGuard]
})
export class AppRoutingModule { }
