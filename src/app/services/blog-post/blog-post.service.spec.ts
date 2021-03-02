import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { BlogPostService } from './blog-post.service';

describe('BlogPostService', () => {
  let service: BlogPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    service = TestBed.inject(BlogPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
