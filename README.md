# panto-transformer-replace
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Replace transformer for panto.

It uses [replacestream](https://www.npmjs.com/package/replacestream) to replace and receives the same syntax.

```js
panto.loadTransformer('replace');

panto.pick('**/*.js').replace({
    replacements: [
                    [/\bfoo\b/, 'bar'],
                    [/(\d[4]-\d[2]-d[2])/, '$2/$3/$1']
                ]
});
```

## options
 - replacements: Array

[npm-url]: https://npmjs.org/package/panto-transformer-replace
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-replace.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-replace.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-replace
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-replace.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-replace
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-replace.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-replace#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-replace/dev-status.svg
