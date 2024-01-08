import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  id:number = 0
  article:Article = {
    article_category: '',
    cover_image: '',
    created_at: '',
    description: '',
    groups: [],
    hightlight: false,
    id: 0,
    is_all_users: true,
    title: ''
  }

  constructor(private route: ActivatedRoute,
    private service:ArticleService) { }

  ngOnInit(): void {
    this.route.queryParams
    .filter(params => params.id)
    .subscribe(params => {
      this.id = params.id
    })

    console.log(this.id)

    this.service.get(this.id)
    .subscribe((result:Article) => {
      this.article = result
    })
  }

  formatImage(path:string) {
    return '../../../assets/images/' +  path.replace('http://localhost:8000/media/photos/','')
  }

}
