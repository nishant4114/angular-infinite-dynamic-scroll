import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { NewsFeedDirective } from './news-feed.directive';
import { NewsFeedItem }      from './news-feed-item';
import { NewsFeedComponent } from './news-feed.component';

@Component({
  selector: 'app-news-feed-banner',
  template: `
              <div class="news-feed-banner">
                <h3>News Feed</h3>
                <ng-template news-feed></ng-template>
              </div>
            `
})
export class NewsFeedBannerComponent implements OnInit, OnDestroy {
  @Input() newsfeeds: NewsFeedItem[];
  currentAdIndex = -1;
  @ViewChild(NewsFeedDirective) newsfeed: NewsFeedDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadNewsFeedComponents();
    this.getNewsFeeds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadNewsFeedComponents() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.newsfeeds.length;
    
    let NewsFeedItem = this.newsfeeds[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(NewsFeedItem.component);

    let viewContainerRef = this.newsfeed.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<NewsFeedComponent>componentRef.instance).data = NewsFeedItem.data;
  }

  getNewsFeeds() {
    this.interval = setInterval(() => {
      this.loadNewsFeedComponents();
    }, 3000);
  }
}
