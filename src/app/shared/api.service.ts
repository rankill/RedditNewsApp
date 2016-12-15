// Angular core
import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

// RxJS import - to Promise
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  // Will keep the loaded posts every loop
  loadedPosts: Array = [];

  private _after: string = '';
  private _baseUrl: string = 'https://www.reddit.com';
  private _latestPostsReddit: string = `${this._baseUrl}/r/news/.json?after=`;

  /**
   * Function to handle the error on loading the posts
   * @param _error
   * @returns {Promise<void>|Promise<T>}
   */
  private handleError(_error: any): Promise<any> {
    console.error('An error occurred', _error); // for demo purposes only
    return Promise.reject(_error.message || _error);
  }

  constructor(private _http: Http) { }


  /**
   * Function to get the latest post of specific url
   * @param _shouldRefresh -  If the plataform need to refresh the list of posts
   * @returns {Promise<Array>}
   */
  getLatestPosts(_shouldRefresh = false): Promise<Array[]> {

    if (_shouldRefresh) {
      this._after = '';
      this.loadedPosts = [];
    }

    let tempUrl = this._latestPostsReddit + this._after;

    // noinspection TypeScriptUnresolvedFunction
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
}
