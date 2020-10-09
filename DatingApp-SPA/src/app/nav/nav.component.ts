import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      console.log('logged in successfully');
    },
    error =>{
      console.log('error in log in');
    }
    );
  }

  loggedIn(){
    const token =localStorage.getItem('token');
    return !!token;
  }

  // tslint:disable-next-line: typedef
  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
