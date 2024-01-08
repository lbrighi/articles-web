import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { ContextService } from 'src/app/service/context.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  login:Login = {
    email:"",
    password: ""
  }
  errors: string[] = [];

  constructor(
    private token:TokenService,
    private context:ContextService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.token.login(this.login)
    .subscribe(
      (result) => {
        this.context.set(result.access)
        this.router.navigate(['/home'])
        .then(() => {
          window.location.reload();
        });
      },
      (result) => {
        this.errors = ['E-mail ou senha inválido']
      }
    )
  }
}
