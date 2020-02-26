import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {UserService} from '../user.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  regisForm: FormGroup;
  tableau:any[];

  constructor(private service:UserService) { }

  ngOnInit() {
    this.tableau = JSON.parse(localStorage.getItem('user'));
  }

}
