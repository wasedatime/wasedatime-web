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
        git --work-tree=/var/www/wasetime-web --git-dir=/home/deploy/wasetime-web.git checkout -f
        echo "Deployed to master branch. Changing directory to work-tree"
        cd /var/www/wasetime-web
        echo "Done. Installing required production packages..."
        npm install --production \
        && echo "Done. Deleting previous pm2 process and starting a new one..." \
        && (pm2 delete "wasetime" || true) \
        && pm2 start server.js --name "wasetime" \
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
