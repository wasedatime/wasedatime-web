'Career' is a deprecated project in WasedaTime.
It is now served as a template for building a new app inside WasedaTime.


To build a new app inside WasedaTime, you can:
- Duplicate this 'career' folder directly, or
- Create an empty folder and run `npx create-single-spa --moduleType app-parcel` there and then copy/replace necessary files from 'career'


Then change necessary settings in `wasedatime-web/pnpm-workspace.yaml` and `wasedatime-web/root/src/index.html`. (For the details of settings, you can refer to commit `a3b81bd9c26c0c1ce89498623ff90f9bd4026765`, where `Forum` app is initialized.)