import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginData={
  username:'',
  password:'',
};

  constructor(private snack:MatSnackBar,private login:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log('login form submited')
    if(this.loginData.username.trim()==''|| this.loginData.username==null){
          this.snack.open("user name is required !!",'',{
            duration:3000,

          });
          return;
    }

    if(this.loginData.password.trim()==''|| this.loginData.password==null){
      this.snack.open(" password is required !!",'',{
        duration:3000,

      });
      return;
}

          //request to server to generate token

  this.login.generateToken(this.loginData).subscribe(

    (data:any)=>{
      console.log("success");
      console.log(data);

      //login...

      this.login.loginUser(data.token);
      this.login.getCurrentUser().subscribe(
        (user:any)=>{
          this.login.setUser(user);
          console.log(user);
          //redirect ....Admin: admin-dashboard
          //redirect ....Normal:normal-dashboard
              if(this.login.getUserRole()=='Admin')
                 {
                    //admin dashboard
                    //window.location.href='/admin';
                    this.router.navigate(['admin']);
                    this.login.loginStatusSubject.next(true);
                  }
               else if(this.login.getUserRole()=='Normal')
                {  console.log("enter")
                    //normal user dasboard
                   // window.location.href='/user-dashboard';
                      this.router.navigate(['user-dashboard'])
                      this.login.loginStatusSubject.next(true);
                  }
               else{
                       this.login.logout();
                       
                    }

        }
      )
    },
    (error)=>{
      console.log('Error !!');
      console.log(error);
      this.snack.open("Invalid Details !! Try agains",'',{
        duration:3000,
      })
    }
  )
  }

}
