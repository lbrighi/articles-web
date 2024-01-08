import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pagination:any = {currentPage:1, perPage:10}
  total:number = 0
  search:string = "";
  articles:Article[] = []
  hightLightsArticles:Article[] = []
  category:number = 0

  constructor(private route: ActivatedRoute,
    private service:ArticleService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams
    .filter(params => params.search)
    .subscribe(params => {
      this.search = params.search
    })

    this.route.queryParams
    .filter(params => params.category)
    .subscribe(params => {
      this.category = params.category
    })

    this.load()
  }

  load() {
    console.log("adoasndoasjdnon")
    this.service.list(this.search,this.category)
    .subscribe(
      (result) => {
        this.articles = result.results
        this.hightLightsArticles = this.articles.filter(a => a.hightlight == true)
        console.log(this.articles)
        console.log(this.hightLightsArticles)
        this.total = result.count
      },
      (result) => {

      }
    )
  }

  clear() {
    this.router.navigate(['/home'])
    .then(() => {
      window.location.reload();
    });
  }

  formatImage(path:string) {
    return '../../../assets/images/' +  path.replace('http://localhost:8000/media/photos/','')
  }

  formatDescription(description:string, totalPhrases:number) {
    var splitDescription = description.split(' ')
    var newDescription = ''
    for (let index = 0; index < totalPhrases; index++) {
      if (index != totalPhrases-1)
        newDescription += splitDescription[index] + ' ';
      else
      newDescription += splitDescription[index] + '...';
    }
    return newDescription
  }

  goToArticle(id:string) {
    const url = this.router.serializeUrl(this.router.createUrlTree(['/article'], { queryParams: { id } }));
    window.open(url, '_blank');
  }
}
