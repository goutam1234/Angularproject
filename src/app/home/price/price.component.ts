import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
 import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
      // email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      // mobile: ['', Validators.required],
      // password: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  postdata(angform1)
  {
    // this.dataService.userlogin(angForm1.value.mobile,angForm1.value.password)
    // alert(angform1);
    this.dataService.payment_ott(angform1)
    // .pipe(first())
    // .subscribe(
    // data => {
     
    //   const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/home'; 
    //   this.router.navigate([redirect]);
    // },
    // error => {
    //   alert("111");
    //   // alert("User name or password is incorrect")
    // });

    this.dataService.payment_ott(angform1).subscribe((result)=>{
      console.warn(result);
      // alert(JSON.stringify(result));
      alert(result.username);
      if(result.id==1){
        //alert('if');
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/subcription/'+result.username;
        this.router.navigate([redirect]);

      }
      else{
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/home';
        this.router.navigate([redirect]);
      }
    })
  }
  // get email() { return this.angForm.get('email'); }
  // get password() { return this.angForm.get('password'); }

}
