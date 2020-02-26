import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {ArticleService} from 'src/app/article.service'


@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss']
})
export class ListArticleComponent implements OnInit {
  addArticleForm: FormGroup;
  tableau:any[];
  files:any;
  constructor(private service:ArticleService) { }

  ngOnInit() {
    this.tableau = JSON.parse(localStorage.getItem('articles'));
  }
  deleteArticles(i){
    //this.service.deleteArticles(i,this.tableau);

    
      this.tableau.splice(i,1);
      localStorage.setItem('article',JSON.stringify(this.tableau));
      
    
  }
  showArticles(i){}
}
