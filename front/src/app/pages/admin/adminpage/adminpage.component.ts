import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  
  constructor(public login: LoginService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.login.logout();
    
    window.location.reload();
   this.login.loginStatusSubject.next(false)
  }
}
