import { Injectable }           from '@angular/core';


import { ProfileFeedComponent } from './profile-feed.component';
import { NewsFeedItem }               from './news-feed-item';

@Injectable()
export class NewsFeedService {
  getAds() {
    return [
      new NewsFeedItem(ProfileFeedComponent, {name: 'John Doe', bio: 'hi i am joe dohn'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'Alex', bio: 'Angular Freelancer'}),


    ];
  }
}
