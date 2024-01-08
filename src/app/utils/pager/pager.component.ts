import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ngx-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit, OnChanges {
  @Input() currentPage: number = 1;
  @Output() currentPageChange:EventEmitter<number> = new EventEmitter<number>();
  @Input() perPage: number = 10;
  @Input() total:number = 10;
  pages = new Array();

  constructor() {}

  ngOnInit(): void {
    this.currentPage = 1
    this.currentPageChange.emit(this.currentPage)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.total != null) {
      var countPages:number = Math.trunc(this.total/this.perPage) + 1
      for (let index = 1; index <= countPages; index++) {
        this.pages.push(index)
      }
    }
  }

  onPageClick(page:number){
    this.currentPage = page
    this.currentPageChange.emit(this.currentPage)
  }
}
