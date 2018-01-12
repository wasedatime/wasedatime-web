#!/bin/bash
set -x

#remove .ssh directory before deploying
rm -R .ssh

if [ $TRAVIS_BRANCH == 'master' ] ; then
    git remote add deploy 'deploy@139.59.122.225:wasetime-web.git'
    git add client/build --force
    git status
    git commit -m "Deploy from Travis CI"
    git push deploy master
else
    echo "Not deploying, since this branch isn't master."
fi
