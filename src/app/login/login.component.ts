import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator} from '@angular/forms';
//import { Router} from '@angular/router';
//import {ApiService} from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  form!: FormGroup<any>;
  submit: any;
  //constructor(private apiService: ApiService,private router: Router) { }
 
  submitForm(){
    // if(this.loginForm.invalid){
    //   return ;
    // }
    console.log(this.loginForm.value)
    if(this.loginForm.value.userid != 'mindchamps' && this.loginForm.value.password != 'aadhi'){
       alert('Incorrect userid or password') 
    }
  }
  ngOnInit(){
    this.loginForm = new FormGroup(
    {
      userid : new FormControl('', [Validators.required, Validators.minLength(6)]),
      password : new FormControl('', [Validators.required,Validators.minLength(6)])
    }
    );
  }
  onLogin(){
    console.log()
  }
 

    
}
 