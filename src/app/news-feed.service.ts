import { Injectable }           from '@angular/core';

import { JobFeedComponent }   from './job-feed.component';
import { ProfileFeedComponent } from './profile-feed.component';
import { NewsFeedItem }               from './news-feed-item';

@Injectable()
export class NewsFeedService {
  getAds() {
    return [
      new NewsFeedItem(ProfileFeedComponent, {name: 'John Doe', bio: 'hi i am joe dohn'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'Alex', bio: 'Angular Freelancer'}),
      new NewsFeedItem(JobFeedComponent,{headline: 'Hiring for several positions',
      body: 'Submit your resume today!'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name4', bio: 'bio4'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name5', bio: 'bio5'}),
      new NewsFeedItem(JobFeedComponent,{headline: 'headline6',
      body: 'body6'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name7', bio: 'bio7'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name8', bio: 'name8'}),
      new NewsFeedItem(JobFeedComponent,{headline: 'headline9',
      body: 'body9'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name10', bio: 'bio10'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name11', bio: 'bio11'}),
      new NewsFeedItem(JobFeedComponent,{headline: 'headline12',
      body: 'body12'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name12', bio: 'bio12'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name13', bio: 'bio13'}),
      new NewsFeedItem(JobFeedComponent,{headline: 'headline14',
      body: 'body14'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name15', bio: 'bio15'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name16', bio: 'name16'}),
      new NewsFeedItem(JobFeedComponent,{headline: 'headline17',
      body: 'body17'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name18', bio: 'bio18'}),
      new NewsFeedItem(ProfileFeedComponent, {name: 'name19', bio: 'bio19'}),
      new NewsFeedItem(JobFeedComponent,{headline: 'headline20',
      body: 'body20'})


    ];
  }
}
