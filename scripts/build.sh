#!/bin/sh

cd $TRAVIS_BUILD_DIR/scripts
npm install
node readme.js
