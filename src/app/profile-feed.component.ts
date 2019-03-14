import { Component, Input }  from '@angular/core';

import { NewsFeedComponent }       from './news-feed.component';

@Component({
  template: `
    <div class="profile-feed">
      <h3>Featured Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

    </div>
  `
})
export class ProfileFeedComponent implements NewsFeedComponent {
  @Input() data: any;
}


