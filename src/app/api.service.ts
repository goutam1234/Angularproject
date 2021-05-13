import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl: string;
  baseUrl:string = "http://localhost:8080/NS/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  public userlogin(mobile, password) {
    // alert(mobile);
    // alert(password);
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { mobile, password })
    .pipe(map(Users => {
      // alert(JSON.stringify(Users));
    this.setToken(Users[0].phone);
    
    

    this.getLoggedInName.emit(true);
    return Users;
    }));
  }

  public userregistration(name,phone,email,pwd) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, phone, email, pwd })
    .pipe(map(Users => {
    this.setToken(phone);
    this.getLoggedInName.emit(true);
    return Users;
    }));
  }

  public payment_ott(type) {
    var userphone:string = this.getToken();
    //alert(this.getToken());
     return this.httpClient.post<any>(this.baseUrl + '/payment.php', { type,userphone });
     //var uData:string = this.httpClient.post<any>(this.baseUrl + '/payment.php', { type,userphone });
     //alert(JSON.stringify(this.httpClient.post<any>(this.baseUrl + '/payment.php', { type,userphone })));
    // .pipe(map(Users => {
    // this.setToken(email);
    // this.getLoggedInName.emit(true);
    // return Users;
    // }));
   
        /*.pipe(map(reResults=> {
          this.push(res['authdata_all']);
          return Result;
        }),*/
       
  // }



  }


  public usersubscribe(netwood_phone:string,games_phone:string,starhunt_phone:string) {
   // echo phone;die;
    var netwoodphone:string = netwood_phone;
    var gamesphone:string = games_phone;
    var starhuntphone:string = starhunt_phone;
    //alert(this.getToken());
     //console.warn(netwoodphone+gamesphone+starhuntphone);
     //alert(this.baseUrl);
     alert(this.baseUrl + '/usersubscription.php');
     return this.httpClient.post<any>(this.baseUrl + '/usersubscription.php', { netwoodphone,gamesphone,starhuntphone });
     //return this.httpClient.post<any>(this.baseUrl + '/payment.php', { netwoodphone,gamesphone,starhuntphone });
     //var uData:string = this.httpClient.post<any>(this.baseUrl + '/payment.php', { type,userphone });
     //alert(JSON.stringify(this.httpClient.post<any>(this.baseUrl + '/payment.php', { type,userphone })));
    // .pipe(map(Users => {
    // this.setToken(email);
    // this.getLoggedInName.emit(true);
    // return Users;
    // }));
   
        /*.pipe(map(reResults=> {
          this.push(res['authdata_all']);
          return Result;
        }),*/
       
  // }



  }

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
}
