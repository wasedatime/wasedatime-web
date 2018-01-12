#!/bin/bash

#Show the output of certain commands for debugging
set -x

#Import private deploy key
openssl aes-256-cbc -K $encrypted_0bf5282a1b59_key -iv $encrypted_0bf5282a1b59_iv -in deploy_rsa.enc -out deploy_rsa -d
rm deploy_rsa.enc
chmod 600 deploy_rsa
mv deploy_rsa ~/.ssh/id_rsa
