import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import du module pour l'utilisation de formulaire réactif
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import du module HTTP pour comuniquer sur l'internet mondial
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserComponent } from './user-page/user/user.component';
import { UserFormComponent } from './user-page/user-form/user-form.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { ArticlePreviewComponent } from './article-page/article-preview/article-preview.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserPageComponent,
    UserComponent,
    UserFormComponent,
    ArticlePageComponent,
    ArticlePreviewComponent,
    ArticleComponent,

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
