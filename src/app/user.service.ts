import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  list:any[];
  accessArticles: any;

  constructor() { 
    
  }
  register(list, user){
    list.push(user);
    localStorage.setItem('user',JSON.stringify(list));
  }
}
