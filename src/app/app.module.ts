import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './user/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {TableModule} from "primeng/table";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {PasswordModule} from "primeng/password";
import {MultiSelectModule} from "primeng/multiselect";
import {MessageService} from "primeng/api";
import {UserService} from "./user/shared/user.service";
import {ToastModule} from "primeng/toast";
import {RegisterComponent} from "./user/register/register.component";
import {RoleService} from "./user/shared/role.service";
import {DialogModule} from "primeng/dialog";


@NgModule({
  declarations: [
    AppComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, FormsModule,
    ReactiveFormsModule, ToastModule, InputTextModule, CalendarModule, ProgressSpinnerModule, ButtonModule, DropdownModule,
    TableModule, BreadcrumbModule, PasswordModule, MultiSelectModule, RouterModule,
    DialogModule
  ],
  providers: [MessageService, UserService, RoleService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {
}
