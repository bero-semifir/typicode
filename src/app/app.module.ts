import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import du module pour l'utilisation de formulaire réactif
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import du module HTTP pour comuniquer sur l'internet mondial
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserComponent } from './user-page/user/user.component';
import { UserFormComponent } from './user-page/user-form/user-form.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticlePreviewComponent } from './articles-page/article-preview/article-preview.component';
import { ArticleComponent } from './articles-page/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserPageComponent,
    UserComponent,
    UserFormComponent,
    ArticlesPageComponent,
    ArticlePreviewComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ajout du module pour les formulaires
    ReactiveFormsModule,
    FormsModule,
    // ajout du module HTTP
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
