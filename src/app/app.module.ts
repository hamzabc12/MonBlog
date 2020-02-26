import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { ProfilComponent } from './auth/profil/profil.component';
import { AppComponent } from './app.component';
import { AddArticleComponent } from './article/add-article/add-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AlifeFileToBase64Module} from 'alife-file-to-base64';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
 import { AngularMaterialModule } from './angular-material.module';
 import { AppRoutingModule } from './app-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { HomeComponent } from './home/home.component';
import {UserService} from './user.service';
import {BrowserModule} from '@angular/platform-browser';






@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistreComponent,
    ProfilComponent,
    AddArticleComponent,
    ListArticleComponent,
    ArticleComponent,
    AppComponent,
    NavBarComponent,
    ListUserComponent,HomeComponent
  
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AlifeFileToBase64Module,
    CKEditorModule,
    AngularMaterialModule,
    AppRoutingModule,
    
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
