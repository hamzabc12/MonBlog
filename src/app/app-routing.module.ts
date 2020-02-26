import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { ProfilComponent } from './auth/profil/profil.component';
import { AppComponent } from './app.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { ArticleComponent } from './article/article.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
        {path: 'home' , component:HomeComponent },
        {path: 'nav-bar',component:AuthComponent},
        {path: 'auth',component:AuthComponent, children: [
          {path: 'login',component: LoginComponent},
          {path: 'registre',component: RegistreComponent},
          {path: 'profil',component: ProfilComponent},
        ]},
       
        {path: 'article',component: ArticleComponent},
        {path: 'add-article',component: AddArticleComponent},
        {path: 'list-article',component: ListArticleComponent},
        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
