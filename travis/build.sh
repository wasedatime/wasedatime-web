#!/bin/bash
set -x

if [ $TRAVIS_BRANCH == 'master' ] || [ $TRAVIS_BRANCH == 'staging' ]; then
    npm run build --prefix client
else
    echo "Not building, since this branch isn't master or staging."
fi
