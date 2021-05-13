import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router,ActivatedRoute } from '@angular/router';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-subcription',
  templateUrl: './subcription.component.html',
  styleUrls: ['./subcription.component.css']
})
export class SubcriptionComponent implements OnInit {
  angForm: FormGroup;
  constructor(private _Activatedroute:ActivatedRoute,private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
      // email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      netwood_phone: ['', Validators.required],
     
    });


   }
  sub;
  id;
  prod;
  data;
  ngOnInit(): void {
    console.log(this._Activatedroute.snapshot.params);
    this.data=this._Activatedroute.snapshot.params.username;
    // this.sub=this._Activatedroute.paramMap.subscribe(params => { 
    //   console.log(params);
    //    this.id = params.get('username'); 
    //   // alert(this.id);
    //   let pro=this.id;
    // //  let products=this._productService.getProducts();
    //   this.prod=pro.find(p =>this.id);
    
    // });

    this.angForm = new FormGroup({
      netwood_phone: new FormControl(this.data),
      newogames_phone: new FormControl(this.data),
      starhunt_phone: new FormControl(this.data),

      
      //passwd: new FormControl("abcd1234")
   });


  }

  subscribe(angForm1) 
    {
      //console.warn('hii');
      // alert(1111);
      //  console.warn(angForm1.netwood_phone,angForm1.newogames_phone,angForm1.starhunt_phone);
      
      // alert(angForm1.value.netwood_phone);
      this.dataService.usersubscribe(angForm1.netwood_phone,angForm1.newogames_phone,angForm1.starhunt_phone)
      //.pipe(first())
      // .subscribe(
      // data => {
      //   this.router.navigate(['home']); 
      // },
  
      // error => {
      // });
    }

    get netwood_phone() { return this.angForm.get('netwood_phone'); }

}
/*function subscribe(angForm1: any) {
  throw new Error('Function not implemented.');
}*/

