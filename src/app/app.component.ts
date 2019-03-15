import { Component, OnInit } from '@angular/core';

import { NewsFeedService } from './news-feed.service';
import { NewsFeedItem } from './news-feed-item';

@Component({
  selector: 'app-root',
  template: `
    <ul infiniteScroll [infiniteScrollDistance]="0.5" (scrolled)="onScroll($event)">
    
      <li *ngFor="let in of posts;let i = index">
      {{i}}
        <app-news-feed-banner [newsfeeds]="newsfeeds" news-feed [feedindex]="i">
        </app-news-feed-banner>
      </li>  
    </ul>
  `
})
export class AppComponent implements OnInit {
  newsfeeds: NewsFeedItem[];

  constructor(private newsFeedService: NewsFeedService) { }
  newPosts = this.newsfeeds;
  posts: any;
  limit: number;
  // posts = ' '.repeat(10).split('').map((s, i) => i + 1)

  onScroll() {
    console.log('printing posts', this.posts);
    this.limit = this.limit + 3
    var y = [];
    for (var i = 0; i < this.newsfeeds.length; i++) {
      y.push(i);
    }
    this.posts = y.slice(0, this.limit)
    // const length = this.posts.length
    // setTimeout(() => {
    //   const p = ' '.repeat(10).split('').map((s, i) => i + 1 + length)

    //   // This approach should be used to avoid creating another memory address to the array
    //   while(p.length) this.posts.push(p.shift())
    // }, 1000)
  }
  ngOnInit() {
    this.newsfeeds = this.newsFeedService.getAds();
    var x = [];
    for (var i = 0; i < this.newsfeeds.length; i++) {
      x.push(i);
    }

    this.limit = 5

    let newx = x.slice(0, this.limit)

    this.posts = newx;
    console.log('print thius news feed service', newx);
  }

}

