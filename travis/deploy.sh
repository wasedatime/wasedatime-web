#!/bin/bash
set -x

if [ $TRAVIS_BRANCH == 'master' ] ; then
    git remote add deploy 'deploy@139.59.122.225:wasetime-web.git'
    git add .
    git add client/build --force
    git commit -m "Deploy from Travis CI"
    git push deploy master
else
    echo "Not deploying, since this branch isn't master."
fi
