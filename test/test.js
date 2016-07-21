/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-07-22[00:53:50]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const ReplaceTransformer = require('../');

describe('panto-transformer-replace', () => {
    describe('#transform', () => {
        it('should replace all', done => {
            new ReplaceTransformer({
                replacements: [
                    [/\bfoo\b/, 'bar'],
                    [/(\d[4]-\d[2]-d[2])/, '$2/$3/$1']
                ]
            }).transform({
                filename: 'a.js',
                content:'mark foo deep\ntick 2016-07-22 beep'
            }).then(file => {
                assert.deepEqual(file.content, 'mark bar deep\ntick 2016-07-22 beep');
            }).then(() => done()).catch(e => console.error(e));
        });
    });
});
