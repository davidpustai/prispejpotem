# Přispěj potem

## Using
 * parts of [HTML5 Boilerplate](https://html5boilerplate.com/)
 * [normalize.css](https://necolas.github.io/normalize.css/)
 * [SASS](http://sass-lang.com/)
 * [Gulp](https://gulpjs.com/)
 * [Twig](https://twig.symfony.com/)
 * [Babel](https://babeljs.io/)

## Getting started
First install dependencies:
```
npm install
bower install
```

And let's start working (more about gulp commands below):
```
gulp
```

## Gulp commands
 * `gulp [default]` - *use for development, compiles into `dev` directory*
	* compiles and prefixes scss
	* runs local server (with live reload) at `localhost:8000`
	* watches for changes
 * `gulp build` - *use when deploying, compiles into `dist` directory*
 	* compiles, prefixes, concats and minifies scss
 	* minifies (combines) media queries
 	* concats and minifies javascript
 	* templates html with Twig and minifies it
 	* copies favicons and configs to root
 	* revisions assets to bust caches
 	* runs local server at `localhost:8000`
 	* makes everything avaliable for production in `dist` folder
 * `gulp serve` - *use for production build review*
 	* builds the project with `build` task
 	* runs local server at `localhost:8000`

## Contributions

When releasing
* update version in `package.json` and `bower.json`
* rename `[Unreleased]` section in `CHANGELOG.md` to `[<version>] <date-of-release>`
* create new `[Unreleased]` section at the top
* `git add . && git commit -m v<version-number>`
* `git tag -a v<version-number>`
* `git push && git push --tags`


## Changelog

In separate file [CHANGELOG.md](CHANGELOG.md). Please [keep a CHANGELOG](http://keepachangelog.com/).

This project adheres to [Semantic Versioning](http://semver.org/).


***
Generated on 2021-03-17 via [Yeoman](http://yeoman.io) with [generator-web-project](https://github.com/davidpustai/generator-web-project) 0.15.0.
