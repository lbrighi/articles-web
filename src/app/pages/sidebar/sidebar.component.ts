import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Category } from "../../models/category";
import { CategoryService } from "src/app/service/category.service";
import { Router } from "@angular/router";

@Component({
  selector: "my-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  categories:Category[] = [];

  constructor(private service:CategoryService, private router:Router) {
    this.service.list()
    .subscribe(
      (result) => {
        this.categories = result.results
      },
      (result) => {
        console.log(result)
      }
    )
  }

  goToHome(category:string) {
    this.router.navigate(['/home'],
    {queryParams: { category }})
    .then(() => {
      window.location.reload();
    });
  }
}
