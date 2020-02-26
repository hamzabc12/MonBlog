import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {
  regisForm: FormGroup;
  tableau: any[];
  user: {
    userName:string,
    email:string,
    password:string,
   }
  
  constructor(private service:UserService) { }

  ngOnInit() {
    // this.tableau =[]

    this.tableau = JSON.parse(localStorage.getItem('user')) ;
    this.regisForm = new FormGroup({
      userName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      
    });
    console.log(this.regisForm);
  }

  register(){
    this.service.register(this.tableau, this.regisForm.value);
  }
  }


