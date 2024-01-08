import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TesteComponent } from './pages/teste/teste.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AccessComponent } from './pages/access/access.component';
import { ArticleComponent } from './pages/article/article.component';

export const routes = [
  {path:'', redirectTo: '/login', pathMatch:'full' },
  {path: '', component: AccessComponent,
    children: [
      {path: 'login', component: LoginComponent },
      {path: 'logout', component: LogoutComponent },
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'teste',
    component: TesteComponent,
  },
  {
    path: 'article',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
