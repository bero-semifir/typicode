import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';

const routes: Routes = [
  {path:'', component: ArticlesPageComponent, pathMatch: 'full'},
  {path:'users', component: UserPageComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
