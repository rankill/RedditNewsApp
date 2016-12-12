import { Injectable }    from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Headers, Http } from '@angular/http';

// Classes
//import { Array } from './../classes/post';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  latestArrays: Array[];
  private _postsRedditUrl: string = 'https://www.reddit.com/r/news/.json';
  private _postsRedditSearchUrl: string = 'https://www.reddit.com/search.json?q=';


  private handleError(_error: any): Promise<any> {
    console.error('An error occurred', _error); // for demo purposes only
    return Promise.reject(_error.message || _error);
  }

  constructor(private _http: Http) { }

  getLatestPosts(_quantity:any = null): Promise<Array[]> {

    let tempUrl = this._postsRedditUrl;

    if (_quantity) {
      console.warn('Pase cantidad');
      tempUrl = tempUrl + `?limit=${_quantity}`;
    }


    //noinspection TypeScriptUnresolvedFunction
    return this._http.get(tempUrl)
      .toPromise()
      .then(_response => _response.json().data.children.map((_children: any) => _children.data as Array[]))
      .catch(this.handleError);
  }

  getPostDetails(_id: any): Promise {

    console.warn('Este es el parametro', _id);

    return new Promise(resolve =>
      this.getLatestPosts()
        .then(_posts => {
          resolve(_posts.find(_post => _post.id == _id))
        })
    );
  }
}
