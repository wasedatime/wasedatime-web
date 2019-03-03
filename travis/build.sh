#!/bin/bash
set -x

if [ $TRAVIS_BRANCH == 'master' ]; then
    npm run build --prefix client
elif [ $TRAVIS_BRANCH == 'staging' ]; then
    npm run build-staging --prefix client
else
    npm run build --prefix client
fi
