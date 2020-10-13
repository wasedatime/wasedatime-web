#!/bin/bash
set -x

git checkout "$TRAVIS_BRANCH"

if [ "$TRAVIS_BRANCH" == 'master' ] ; then
  curl -X POST -d {} "https://webhooks.amplify.$AWS_ZONE.amazonaws.com/prod/webhooks?id=$AWS_WEBHOOK_ID_MAIN&token=$AWS_WEBHOOK_TOKEN_MAIN&operation=startbuild" -H "Content-Type:application/json"
fi

if [ "$TRAVIS_BRANCH" == 'develop' ] ; then
    curl -X POST -d {} "https://webhooks.amplify.$AWS_ZONE.amazonaws.com/prod/webhooks?id=$AWS_WEBHOOK_ID_DEV&token=$AWS_WEBHOOK_TOKEN_DEV&operation=startbuild" -H "Content-Type:application/json"
fi
