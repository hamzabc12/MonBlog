import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private route: Router,private http: HttpClient) { }
  

  accordArticles(email,password){
    let tabUsers = JSON.parse(localStorage.getItem('user'));
    const user = tabUsers.find(element => element.email === email && element.password===password)
     console.log(user)
     if(!user){
        console.log("login failed")
      }
      else{
        localStorage.setItem('authUser', JSON.stringify(user));
        this.route.navigateByUrl('/articles')
      }
    }
    addArticle(tab, article){
      tab.push(article);
      localStorage.setItem('article',JSON.stringify(tab));
    }
    
    deleteArticles(i, listArticles){
      listArticles = JSON.parse(localStorage.getItem('articles'));
      listArticles.splice(i,1);
      localStorage.setItem('article',JSON.stringify(listArticles));
      
    }

}
