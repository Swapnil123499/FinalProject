import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';

//import { NormalGuard } from './services/normal.guard';
//import { UserService } from './services/user.service';
//import { AdminGuard } from './services/admin.guard';
import {MatListModule} from '@angular/material/list';
//import { WelcomComponent } from './pages/admin/welcome/welcom.component';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FooterComponent } from './footer/footer.component';
import { AdminpageComponent } from './pages/admin/adminpage/adminpage.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { CreateproductComponent } from './pages/admin/createproduct/createproduct.component';
import { UpdateproductComponent } from './pages/admin/updateproduct/updateproduct.component';
import { AllproductsComponent } from './pages/admin/allproducts/allproducts.component';
import { ActiveproductsComponent } from './pages/admin/activeproducts/activeproducts.component';
import { WelcomeadminComponent } from './pages/admin/welcomeadmin/welcomeadmin.component';
import { UpdateeachproductComponent } from './pages/admin/updateeachproduct/updateeachproduct.component';
import { DeleteproductComponent } from './pages/admin/deleteproduct/deleteproduct.component';
import { DeleteeachproductComponent } from './pages/admin/deleteeachproduct/deleteeachproduct.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartComponent } from './pages/user/cart/cart.component';
import { UserhomeComponent } from './pages/user/userhome/userhome.component';
import { HomecartComponent } from './pages/user/homecart/homecart.component';
import { LoadingcartComponent } from './pages/user/loadingcart/loadingcart.component';
import { OrdersdetailComponent } from './pages/user/ordersdetail/ordersdetail.component';
import { AboutusComponent } from './mainfiles/aboutus/aboutus.component';
import { ServicesComponent } from './mainfiles/services/services.component';
import { AboutdetailComponent } from './mainfiles/aboutdetail/aboutdetail.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    AdminpageComponent,
    UserdashboardComponent,
    CreateproductComponent,
    UpdateproductComponent,
    AllproductsComponent,
    ActiveproductsComponent,
    WelcomeadminComponent,
    UpdateeachproductComponent,
    DeleteproductComponent,
    DeleteeachproductComponent,
    CartComponent,
    UserhomeComponent,
    HomecartComponent,
    LoadingcartComponent,
    OrdersdetailComponent,
    AboutusComponent,
    ServicesComponent,
    AboutdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    Ng2SearchPipeModule,
    MatProgressSpinnerModule
    
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
