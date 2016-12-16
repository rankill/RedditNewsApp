
# **Reddit News**  ![Reddit logo](http://www.uidownload.com/files/399/442/364/logo-reddit-social-social-media-icon.png)

[![Dependency Status](https://david-dm.org/rankill/RedditNewsApp/status.svg)](https://david-dm.org/rankill/RedditNewsApp#info=dependencies)  [![devDependency Status](https://david-dm.org/rankill/RedditNewsApp/dev-status.svg)](https://david-dm.org/rankill/RedditNewsApp#info=devDependencies)

 App thath obtains the latest posts of Reddit using Angular 2
 -----
[![](http://www.brentcsutoras.com/wp-content/uploads/2009/01/alienflap.gif)](https://www.reddit.com/)  [![](https://johnpapa.gallerycdn.vsassets.io/extensions/johnpapa/angular2/1.0.2/1475237564342/Microsoft.VisualStudio.Services.Icons.Default)](https://angular.io/)

-------

## <i class="icon-user"></i> Author
> Luis Aberto Saraza Gutiérrez - @RanKill


## <i class="icon-file"></i> Description
* List the last posts uploaded to reddit
(https://www.reddit.com/r/news/.json)

* Get the details of a post selected by the user


## <i class="icon-upload"></i> Deploy app

```bash
# clone the repo
$ git clone https://github.com/rankill/RedditNewsApp.git

# change directory to your app
$ cd RedditNewsApp

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```
go to [http://localhost:8080](http://localhost:8080) in your browser..


##<i class="icon-folder-open"></i>Versions

There are two versions of the Reddit news App, the main version is in the master branch, so it is the default version that you get when execute git clone or downoald by zip

The second version, is in the branch develop, the main diference is the use of the route service from angular 2 to get the details of an specific post, but it doesn’t have all the visual and functional characteristics of the master branch, however, to check the route version, just run:

```bash
# checkout the develop version
$ git checkout develop
```

And then run the 'deploy app' steps, except the git clone step

##<i class="icon-book"></i>Requirements
What you need to run this app:
>* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v5.x.x`+) and NPM (`3.x.x`+)





## <i class="icon-hdd"></i> Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

**Note: There are some failed test because typo errors or things that aren't very important for the app core.**
