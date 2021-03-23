import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';

const routes: Routes = [
  {path:'', component: ArticlePageComponent, pathMatch: 'full'},
  {path:'users', component: UserPageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
