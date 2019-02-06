#!/bin/bash
set -x

if [ $TRAVIS_BRANCH == 'master' ]; then
    npm run build --prefix client
elif [ $TRAVIS_BRANCH == 'staging' ]; then
    npm run build-staging --prefix client
else
    echo "Not building, since this branch isn't master or staging."
fi
