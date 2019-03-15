import { Component, Input } from '@angular/core';

import { NewsFeedComponent }      from './news-feed.component';

@Component({
  template: `
    <div class="job-feed">
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `
})
export class JobFeedComponent implements NewsFeedComponent {
  @Input() data: any;

}
