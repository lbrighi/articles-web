import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { TesteComponent } from './pages/teste/teste.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TokenService } from './service/token.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ContextService } from './service/context.service';
import { AccessComponent } from './pages/access/access.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { CategoryService } from './service/category.service';
import { Router } from '@angular/router';
import { AuthInterceptor } from './utils/auth-interceptor';
import { HeaderComponent } from './pages/header/header.component';
import { ArticleService } from './service/article.service';
import { PagerComponent } from './utils/pager/pager.component';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './pages/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TesteComponent,
    HomeComponent,
    LoginComponent,
    AccessComponent,
    LogoutComponent,
    HeaderComponent,
    PagerComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    TokenService,
    HttpClient,
    ContextService,
    CategoryService,
    ArticleService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: function(router: Router, context:ContextService) {
        return new AuthInterceptor(router, context);
      },
      multi: true,
      deps: [Router, ContextService]
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
