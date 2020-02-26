import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ArticleService} from 'src/app/article.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {
  Editor = ClassicEditor;
  
 
  addArticleForm: FormGroup;
  files: any;
  tableau: any[];
  image: string;
  article: {
    titleArticle:string,
    content:string,
    image:string,
    category:string,

   }

  constructor(private service:ArticleService, private route: Router) { }

  ngOnInit() {
    this.tableau = [];
    this.addArticleForm = new FormGroup({
      titleArticle: new FormControl('',[Validators.required]),
      content: new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
      
    });
    console.log(this.addArticleForm);
  }
  addArticle(){
    
    this.tableau.push(this.addArticleForm.value);
    localStorage.setItem('articles', JSON.stringify(this.tableau))
    //this.service.addArticle(this.tableau, this.addArticleForm);
    this.route.navigateByUrl('/list-article');
  
  }
  ChangeFile(files){
    this.addArticleForm['controls'].image.setValue(files[0].base64);
    console.log(this.addArticleForm.value.image )
  }

}
