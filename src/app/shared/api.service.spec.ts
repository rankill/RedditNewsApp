import { inject, TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('Api Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ApiService]});
  });

  it('should the base url - reddit', inject([ApiService], (api) => {
    expect(api._baseUrl).toBe('https://www.reddit.com');
  }));
});
