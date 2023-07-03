import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login-component/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NavmenuComponent } from './navmenu/navmenu/navmenu.component';
import { HomeComponent } from './home/home-component/home.component';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { UsersModule } from './usuarios/users/users.module';
import { ServcioexternoComponent } from './servcioexterno/servcioexterno.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [	
        AppComponent,
        LoginComponent,
        HomeComponent,
        NavmenuComponent,
      ServcioexternoComponent
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        UsersModule,
        MatTableModule
    ]
})
export class AppModule { }