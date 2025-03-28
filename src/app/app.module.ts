import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'; // Import the AppComponent
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component'; // Import the ColaboradoresComponent

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColaboradoresComponent
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }