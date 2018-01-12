####Server side

```
mkdir ~/wasetime-web.git
cd ~/wasetime-web.git
git init --bare
vim hooks/post-receive
```

```bash
#!/bin/bash
while read oldrev newrev ref
do
    if [[ $ref =~ .*/master$ ]];
    then
        echo "Master ref received.  Deploying master branch to production..."
        git --work-tree=/var/www/wasetime-web --git-dir=~/wasetime-web.git checkout -f
        echo "Deployed to master branch. Installing required npm packages..."
        npm install \
        && echo "Done. Deleting previous pm2 process and starting a new one..." \
        && (pm2 delete ‘wasetime’ || true) \
        && pm2 start npm --name ‘wasetime’ -- start \
        && echo "Done. wasetime started successfully with pm2."
    else
        echo "Ref $ref successfully received.  Doing nothing: only the master branch may be deployed on this server."
    fi
done
```

```
chmod +x hooks/post-receive
```

####Local side

```
gem install travis
travis login
travis encrypt-file ~/.ssh/deploy_rsa --add
```
