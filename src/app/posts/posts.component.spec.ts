/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostsComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(PostsComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
