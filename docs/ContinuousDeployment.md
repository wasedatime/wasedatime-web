#### Server side

Add a deploy user and with limited directory access permission.

```
adduser deploy
chown -R deploy:deploy /var/www/wasetime-web
```

```
mkdir ~/wasetime-web.git
cd ~/wasetime-web.git
git init --bare
vim hooks/post-receive
```

Production

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

Staging

```bash
#!/bin/bash
while read oldrev newrev ref
do
    if [[ $ref =~ .*/staging$ ]];
    then
        echo "Staging ref received.  Deploying staging branch to staging server..."
        git --work-tree=/var/www/wasetime-web --git-dir=/home/deploy/wasetime-web.git checkout -f staging
        echo "Deployed to staging branch. Changing directory to work-tree"
        cd /var/www/wasetime-web
        echo "Done. Installing required staging packages..."
        npm install \
        && echo "Done. Deleting previous pm2 process and starting a new one..." \
        && (pm2 delete "wasetime-staging" || true) \
        && pm2 start server.js --name "wasetime-staging" \
        && echo "Done. wasetime-staging started successfully with pm2."
    else
        echo "Ref $ref successfully received.  Doing nothing: only the staging branch may be deployed on this server."
    fi
done
```

Make post-receive executable for user deploy exclusively.

```
chmod u+x hooks/post-receive
```

Switch to a user with sudo privilege and allow pm2 to startup automatically for user deploy.

```
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u deploy --hp /home/deploy
```

#### Local side

```
gem install travis
travis login
travis encrypt-file ~/.ssh/deploy_rsa --add
```

#### .env file

Put the .env file outside of the work-tree folder (/var/www/wasetime-web)

Modify server.js to read it from a custom path:

```javascript
require('dotenv').config({ path: '/var/www/.env' });
```

This .env file is read by server.js, but _NOT_ create-react-app.

Two `process.env.NODE_ENV` exists. One in front end and the other in back end.

| Layer     | `NODE_ENV` is controlled by | Manually modifiable | Read by           |
| --------- | --------------------------- | ------------------- | ----------------- |
| Front end | create-react-app            | false               | create-react-app. |
| Back end  | .env file on our server     | true                | server.js         |

According to the [docs](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables#adding-temporary-environment-variables-in-your-shell): When you run `npm start`, `NODE_ENV` is always equal to `'development'`, when you run `npm test` it is always equal to `'test'`, and when you run `npm run build` to make a production bundle, it is always equal to `'production'`. **You cannot override `NODE_ENV` manually in create-react-app**
