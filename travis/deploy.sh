#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    git remote add deploy ssh://deploy@139.59.122.225/wasetime-web.git
    git add .
    git commit -m "Deploy from Travis CI"
    git push deploy master
else
    echo "Not deploying, since this branch isn't master."
fi
