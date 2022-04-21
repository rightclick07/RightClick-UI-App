import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCarouselModule } from 'ng-mat-carousel';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { AppHeaderComponent } from './core/app-header/app-header.component';
import { AppFooterComponent } from './core/app-footer/app-footer.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MainNavComponent } from './core/main-nav/main-nav.component'; 
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareerComponent } from './components/career/career.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    AboutUsComponent,
    MainNavComponent,
    ContactUsComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatChipsModule,
    MatCarouselModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    FormsModule,
    LayoutModule,
    MatSidenavModule,
    MatTooltipModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
