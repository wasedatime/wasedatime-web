#!/bin/bash
set -x

git checkout "$TRAVIS_BRANCH"

if [ $TRAVIS_BRANCH == 'master' ] ; then echo "trigger master webhook"; fi

if [ $TRAVIS_BRANCH == 'release/'* ] ; then echo "trigger release webhook"; fi

if [ $TRAVIS_BRANCH == 'develop' ] ; then
    curl -X POST -d {} "https://webhooks.amplify.$AWS_ZONE.amazonaws.com/prod/webhooks?id=$AWS_WEBHOOK_ID&token=$AWS_WEBHOOK_TOKEN&operation=startbuild" -H "Content-Type:application/json"
fi
