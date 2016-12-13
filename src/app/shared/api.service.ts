import { Injectable }    from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Headers, Http } from '@angular/http';

// Classes
//import { Array } from './../classes/post';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  loadedPosts : Array = [];

  private _after: string = '';
  private _baseUrl: string = 'https://www.reddit.com';
  private _latestPostsReddit: string = `${this._baseUrl}/r/news/.json?after=`;

  private handleError(_error: any): Promise<any> {
    console.error('An error occurred', _error); // for demo purposes only
    return Promise.reject(_error.message || _error);
  }

  constructor(private _http: Http) { }

  getLatestPosts(): Promise<Array[]> {

    console.warn('thisafet', this._after);

    let tempUrl = this._latestPostsReddit + this._after;

    console.log('this', tempUrl);

    //noinspection TypeScriptUnresolvedFunction
    return this._http.get(tempUrl)
      .toPromise()
      .then(_response => {
        this._after = _response.json().data.after;
        this.loadedPosts = this.loadedPosts
          .concat(_response.json().data.children.map((_children: any) => _children.data as Array[]));

        return this.loadedPosts;
      })
      .catch(this.handleError);
  }

  getPostDetails(_id: number | string) : Promise{
    //noinspection TypeScriptUnresolvedVariable

    console.warn('this.loade', this.loadedPosts);
    return Promise.resolve(this.loadedPosts.find(_post => _post.id === _id));
  }
}
