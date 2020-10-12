#!/bin/bash
set -x

if [ $TRAVIS_BRANCH == 'master' ]; then
    npm run build --prefix client
elif [ $TRAVIS_BRANCH == 'release/'* ]; then
    npm run build-staging --prefix client
elif [ $TRAVIS_BRANCH == 'develop' ]; then
    npm run build-dev --prefix client
else
    npm run build --prefix client
fi
