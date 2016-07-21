/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-07-22[00:53:50]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');
const through2 = require('through2');
const replacestream = require('replacestream');

class ReplaceTransformer extends Transformer {
    _transform({
            filename,
            content
        }) {

            //[[foo,bar],[/foo/,bar]]
            const replacements = this.options.replacements;

            return new Promise((resolve, reject) => {
                if (!Array.isArray(replacements) || !replacements.length) {
                    return reject('replacements must be an array');
                }

                const streams = replacements.map(argv => {
                    return replacestream(...argv);
                });

                const s = through2.obj(function (chunk, enc, cb) {
                    this.push(chunk);
                    cb();
                });

                let p = s;
                
                for (let i = 0; i < streams.length; ++i) {
                    p = p.pipe(streams[i]);
                }

                let src = '';

                p.on('data', buf => {
                    src += buf;
                }).on('end', () => {
                    resolve({
                        content: src,
                        filename
                    });
                });
                s.end(content);
            });
        }
    }

    module.exports = ReplaceTransformer;
