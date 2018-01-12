#!/bin/bash
set -x

if [ $TRAVIS_BRANCH == 'master' ] ; then
    #Fix HEAD detached
    git checkout master
    git remote add deploy 'deploy@139.59.122.225:wasetime-web.git'
    git add .
    git add client/build/* --force
    git status
    git commit -m "Deploy from Travis CI"
    git status
    git push deploy master --force
else
    echo "Not deploying, since this branch isn't master."
fi
