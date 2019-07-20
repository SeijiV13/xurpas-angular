import { UserState } from './components/states/user.state';
import { UserService } from './components/services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/containers/home/home.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { UserFormComponent } from './components/dumb/user-form/user-form.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { UserListComponent } from './components/dumb/user-list/user-list.component';
import { AccordionModule } from 'ngx-bootstrap';
import { NgxsModule } from '@ngxs/store';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    NgxsModule.forRoot([
      UserState
    ])
    
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
