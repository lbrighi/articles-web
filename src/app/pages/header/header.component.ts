import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  search:any = {detail: ""}

  constructor(private router:Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams
    .filter(params => params.search)
    .subscribe(params => {
      this.search.detail = params.search;
    })
  }

  onSearch() {
    this.router.navigate(['/home'],
    {queryParams: { search: this.search.detail }})
    .then(() => {
      window.location.reload();
    });
  }

}
