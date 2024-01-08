import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ContextService } from './service/context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sidebarExpanded = true;
  isAuthenticated=false

  constructor(private context:ContextService) { }

  ngOnInit(): void {
    if (this.context.get())
      this.isAuthenticated = true
    else
      this.isAuthenticated = false
  }
}
