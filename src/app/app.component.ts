import { Component, OnInit } from '@angular/core';

import { NewsFeedService }         from './news-feed.service';
import { NewsFeedItem }            from './news-feed-item';

@Component({
  selector: 'app-root',
  template: `
    <ul infiniteScroll [infiniteScrollDistance]="0.5" (scrolled)="onScroll($event)">
      <li *ngFor="let post of posts">
        <app-news-feed-banner [newsfeeds]="newsfeeds">
        </app-news-feed-banner>
      </li>  
    </ul>
  `
})
export class AppComponent implements OnInit {
  newsfeeds: NewsFeedItem[];

  constructor(private newsFeedService: NewsFeedService) {}
  posts = ' '.repeat(10).split('').map((s, i) => i + 1)

  onScroll() {
    console.log('printing posts', this.posts);
    const length = this.posts.length
    setTimeout(() => {
      const p = ' '.repeat(10).split('').map((s, i) => i + 1 + length)

      // This approach should be used to avoid creating another memory address to the array
      while(p.length) this.posts.push(p.shift())
    }, 1000)
  }
  ngOnInit() {
    this.newsfeeds = this.newsFeedService.getAds();
  }

}

