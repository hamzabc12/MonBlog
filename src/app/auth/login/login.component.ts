import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import{ArticleService} from '../../article.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logForm:FormGroup;
  tabUsers: any[];

  constructor(private service:ArticleService) { }

  ngOnInit() {
    this.logForm = new FormGroup({
      emailLogin: new FormControl('',[Validators.required,Validators.email]),
      passwordLogin: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }
  login(){
    this.service.accordArticles(this.logForm.value.emailLogin,this.logForm.value.passwordLogin);
  }
}
