import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from 'src/app/service/context.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private context:ContextService,
    private router:Router) { }

  ngOnInit(): void {
    this.context.clear()
    this.router.navigate(['/login'])
    .then(() => {
      window.location.reload();
    });
  }

}
