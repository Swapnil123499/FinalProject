import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

import { SignupComponent } from './pages/signup/signup.component';

import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { AdminpageComponent } from './pages/admin/adminpage/adminpage.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { WelcomeadminComponent } from './pages/admin/welcomeadmin/welcomeadmin.component';
import { CreateproductComponent } from './pages/admin/createproduct/createproduct.component';
import { UpdateproductComponent } from './pages/admin/updateproduct/updateproduct.component';
import { AllproductsComponent } from './pages/admin/allproducts/allproducts.component';
import { ActiveproductsComponent } from './pages/admin/activeproducts/activeproducts.component';
import { UpdateeachproductComponent } from './pages/admin/updateeachproduct/updateeachproduct.component';
import { DeleteproductComponent } from './pages/admin/deleteproduct/deleteproduct.component';
import { DeleteeachproductComponent } from './pages/admin/deleteeachproduct/deleteeachproduct.component';
import { CartComponent } from './pages/user/cart/cart.component';
import { UserhomeComponent } from './pages/user/userhome/userhome.component';
import { HomecartComponent } from './pages/user/homecart/homecart.component';
import { LoadingcartComponent } from './pages/user/loadingcart/loadingcart.component';
import { OrdersdetailComponent } from './pages/user/ordersdetail/ordersdetail.component';
import { AboutusComponent } from './mainfiles/aboutus/aboutus.component';
import { ServicesComponent } from './mainfiles/services/services.component';
import { AboutdetailComponent } from './mainfiles/aboutdetail/aboutdetail.component';

const routes: Routes = [
{
  path:"signup",
  component: SignupComponent,
  pathMatch:'full'
},
{
  path:'',
  component:HomeComponent
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full',
  
},
{
  path:'navbar',
  component:NavbarComponent,//this had
  pathMatch:'full'
},
{
path:'aboutus',
component:AboutusComponent
},{
  path:'aboutdetail',
  component:AboutdetailComponent
},
{
  path:'services',
  component:ServicesComponent
},
{
  path:'admin',
  component:AdminpageComponent,
  
  canActivate:[AdminGuard],

  children:[
    {
      path:'',
      component:WelcomeadminComponent
    },
    {
      path:'create',
      component:CreateproductComponent
    },
    {
      path:'update',
      component:UpdateproductComponent
    },
    {
      path:'allproduct',
      component:AllproductsComponent
    },
    {
      path:'activeproduct',
      component:ActiveproductsComponent
    },
    {
      path:'updat/:productid',
      component:UpdateeachproductComponent
    },
    {
      path:'deleteproduct',
      component:DeleteproductComponent
    },
    {
      path:'delete/:productid',
      component:DeleteeachproductComponent
    }

  ]}/*
    {
      path:'profile',
      component:ProfileComponent,
    },
    {
      path:'categories',
      component:ViewCategoriesComponent
    },
    {
      path:'add-category',
      component:AddCategoryComponent,
    },
    {
      path:'quizzes',
      component:ViewQuizzesComponent
    },
    {
      path:'add-quiz',
      component:AddQuizComponent
    },
    {
      path:'quiz/:qid',
      component:UpdateQuizComponent,
    },
    {
      path:'view-questions/:qid/:title',
      component:ViewQuizQuestionsComponent,
    },
    {
      path:'add-questions/:qid/:title',
      component:AddQuestionComponent
    }
  ]
}*/,
{
  path:'user-dashboard',
  component:UserdashboardComponent,
  
  children:[{
    path:"",
    component:UserhomeComponent
  },
    
    {
      path:'cart',
      component:CartComponent
    }
    ,
    {
      path:'ag/:cartid/:productname/:discountedprice',
      component:CartComponent
    },
    {
      path:'bag/:cartid/:productname/:discountedprice',
      component:HomecartComponent
    },{
      path:'removed',
      component:LoadingcartComponent
    },
    {
      path:'order',
      component:OrdersdetailComponent
    }
    
  ]
  
}
  /*children:[
    {
      path:':catid',
      component:LoadQuizComponent
    },
    {
      path:'instructions/:qid',
      component:InstructionsComponent
    },
    
  ]
}*/
/*{
  path:'start/:qid',
  component:StartComponent,
  canActivate:[NormalGuard],
}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
