#!/bin/bash
set -x

if [ "$TRAVIS_BRANCH" == 'master' ]; then
    npm run build
elif [[ "$TRAVIS_BRANCH" == 'release/'* ]]; then
    npm run build-staging
elif [ "$TRAVIS_BRANCH" == 'develop' ]; then
    npm run build-dev
else
    npm run build
fi
