import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NewsFeedBannerComponent }    from './news-feed-banner.component';
import { ProfileFeedComponent } from './profile-feed.component';
import { NewsFeedDirective }          from './news-feed.directive';
import { NewsFeedService }            from './news-feed.service';

@NgModule({
  imports: [ BrowserModule, InfiniteScrollModule],
  providers: [NewsFeedService],
  declarations: [ AppComponent,
                  NewsFeedBannerComponent,
                 
                  ProfileFeedComponent,
                  NewsFeedDirective ],
  entryComponents: [  ProfileFeedComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

