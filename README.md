# WasedaTime

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-17-orange.svg?style=flat-square)](#contributors-)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwasedatime%2Fwasedatime-web.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwasedatime%2Fwasedatime-web?ref=badge_shield)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wasedatime/wasedatime-web/blob/master/LICENSE.md)
[![Node.js CI - Root](https://github.com/wasedatime/wasedatime-web/actions/workflows/root.yml/badge.svg)](https://github.com/wasedatime/wasedatime-web/actions/workflows/root.yml)
[![Node.js CI - Syllabus](https://github.com/wasedatime/wasedatime-web/actions/workflows/syllabus.yml/badge.svg)](https://github.com/wasedatime/wasedatime-web/actions/workflows/syllabus.yml)
[![Node.js CI - Campus](https://github.com/wasedatime/wasedatime-web/actions/workflows/campus.yml/badge.svg)](https://github.com/wasedatime/wasedatime-web/actions/workflows/campus.yml)
[![Node.js CI - Feeds](https://github.com/wasedatime/wasedatime-web/actions/workflows/blog.yml/badge.svg)](https://github.com/wasedatime/wasedatime-web/actions/workflows/blog.yml)
[![Node.js CI - Career](https://github.com/wasedatime/wasedatime-web/actions/workflows/career.yml/badge.svg)](https://github.com/wasedatime/wasedatime-web/actions/workflows/career.yml)

[WasedaTime](https://wasedatime.com) (stands for Waseda Timetable) is a non-profit & student-run open source web app for syllabus searching, course reviews and bus schedule checking at Waseda University.

We aim at supporting and improving campus lives of Waseda University students.

## App Architecture

- Micro-frontend (https://martinfowler.com/articles/micro-frontends.html?utm_source=arador.com)
- Description of our frontend architecture (in Micro-frontends) will be updated soon.

## Continuous Integration and Deployment

This project is deployed on AWS Amplify and uses GitHub Actions for continuous integration.

Unfortunately, currently there are no unit tests created to ensure the code quality.

## Built With

**Backend**

You can view the repository [here](https://github.com/wasedatime/wasedatime-backend).

- [Amazon Web Service](https://aws.amazon.com/) - Fully powered by AWS.

**Frontend (Client)**

- Common
  - [Single-spa](https://single-spa.js.org) - A framework to bring together multiple JavaScript microfrontends in a frontend application.
  - [Styled Components](https://www.styled-components.com) - Library used for adding CSS to React components.
- Root
  - [Tailwind](https://tailwindcss.com) - A utility-first CSS framework packed with classes with humen-friendly name; highly customizable.
- Syllabus
  - [Redux](https://redux.js.org) - Library used to manage the state of front-end.
  - [Semantic UI React](https://react.semantic-ui.com) - Official React integration for Semantic UI, a development framework that helps create layouts with prebuilt components easily.
- Campus
  - [React Bootstrap](https://react-bootstrap.github.io) - Official React integration for Bootstrap, a frequently updated development framework that helps create layouts with prebuilt components easily.

# Getting Started

## Prepare your environment

### Git/GitHub

1.  Create a GitHub account if you haven't
2.  If you are a member of our development team, tell me your username or email so that I can add you to our GitHub team.
3.  Install Git on your computer (local): https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Node.js & NPM
Download: https://nodejs.org/en/
Please download the LTS one and install it.
Both `Node.js` and `npm` should be installed.

### PNPM
Install with `npm`
```
npm install -g pnpm
// if ↑ does not work, run ↓
sudo npm install -g pnpm
```
Installation with other ways: https://pnpm.io/installation

### Bit

1. Create a [Bit.dev](https://bit.dev) account if you haven't.
2. If you are a member of our development team, tell me your username or email so that I can add you to our Bit team.

3. Then install Bit on your computer (local): https://docs.bit.dev/docs/installation

4. Check your Bit authentication token with the following command:
	```
	bit config
	```
	and add the token to your environment variable with the following steps:

	**Mac/Linux**
	1. Add the following to file `~/.bash_profile`
	```
	export BIT_TOKEN=XXXXXXXXXXXXX
	// replace XXXXXXXXXXXXX to your token
	```
	2. If you are using Z shell (check if there is a text `zsh` on top of your terminal), add the following in file `~/.zshrc`
	```
	if [ -f ~/.bash_profile ]; then 
	    . ~/.bash_profile;
	fi
	```
	3. Either restart your terminal or run the following:
	```
	source ~/.bash_profile
	```
	**Windows**
	https://www3.ntu.edu.sg/home/ehchua/programming/howto/Environment_Variables.html

### Clone WasedaTime
```
// By HTTP
git clone https://github.com/wasedatime/wasedatime-web.git
// By SSH
git clone git@github.com:wasedatime/wasedatime-web.git
```
Then move into the cloned repository:
```
cd wasedatime-web
```
Run  `git status`  or  `git branch`  to confirm that you are on  `master`  branch

### Install dependencies 
```
// At the top level of the project folder
pnpm install
// ↓ works the same
pnpm i
```
## Run the app on your local
- Run the whole app
	```
	// At the top level of the project folder
	pnpm start
	```
- Run only the `root` app (with Home page, sidebar, AboutUs page)
	```
	cd root
	pnpm start
	```
- Run another app only (e.g. syllabus)
	```
	cd syllabus
	pnpm run local
	```

## Branches

- **master**: The released version. The website actually viewed and used by users is run according to the code in `master`.
- **develop**: Having the latest changes ready to be released. Sometimes different features may conflict with each other, which you would not find during the development on your branch, and that's why this `develop` branch is needed: Merge different new changes and test them with `develop` before officially release
- **feature/name-of-your-feature**: Should be created from `develop`. You should always develop your feature on this branch. If you are working on multiple new features, create different feature branches for each of them
- **hotfix**: Created from `master` and directly pushed backed to `master` after development. This is only for debugging in emergency.


# Development

## Steps

### Before development

1. Make a new branch from `develop` branch called “feature/(name)”
	```
	git checkout develop
	git checkout -b feature/name-of-your-new-feature
	```
2. Then you can run `git status` or `git branch` again to confirm that you are on a new branch.

3. Begin your development!

### Commit during development

Whenever there is some progress in your work, commit it.

1. Run `git status` to check what files are changed during your development.

2. Let Git know what files are ready to be committed
	```
	git add path/to/the/file
	// or you can add all changed files by:
	git add .
	```

3. Commit your changes with a message precisely but specifically describing your changes
	```
	git commit -m "feat: styling of the clean button"
	```
	Please refer to this link about how to write a commit message: https://www.conventionalcommits.org/en/v1.0.0/

4. Push your changes to Github
	```
	git push origin feature/name-of-your-new-feature
	```

*Code editor like VScode has functionality for you to do the above steps without typing them one by one. What you need to do will not change; it just make the process more convenient.*

### Finish development

1. On the [repository page](https://github.com/wasedatime/wasedatime-web), click on the `Pull Request` tab, and then click the `New pull request` button.
2. Set the **base** branch to `develop`, **compare** branch to your branch.
3. Click `Create pull request` button.
4. Inform us that you have created a Pull Request (PR) and we will review it.
5. Continue developing if we found anything to be improved
6. If everything is OK, GREAT JOB! We will merge it into `develop`.
7. **Delete your feature branch on local**

## Create a new app (micro-app) in WasedaTime

*For new big features which is obviously less related to other existing apps (syllabus, campus, feeds)*

1. Install `create-single-spa`
```bash
pnpm install --global create-single-spa
```

2. Inside wasedatime-web folder, run `pnpx create-single-spa --moduleType app-parcel` , then answer questions displayed on the console.

3. A new app (let's say `forum`) is created. Move into the newly created folder `forum` and run the following to install packages
```bash
pnpm i
```

4. Edit `root/src/index.ejs`
```bash
<% if (isLocal) { %>
<script type="systemjs-importmap" defer>
  {
    "imports": {
      "@wasedatime/forum": "//localhost:8082/wasedatime-forum.js" // port number should not be the same as others
} }
</script>
<% } %>
```

5. Try to run the app locally
  - To run the app alone, run `pnpm run start:standalone`, then open http://localhost:8080
  - To run the app alone but with root, edit `forum/package.json` like the following:
  ```bash
    "scripts": {
    "start": "webpack serve --port 8082",
    ...
    "local": "concurrently --kill-others \"pnpm start\" \"cd ../root && pnpm start\"",
    ...
  },
  ```
  Then run `pnpm run local` inside career folder. This runs root and career at the same time.
  Before this, make sure you have run `pnpm i` inside root folder to install packages for root. Open http://localhost:9000 to see the result.
  - To run the whole project, run npm run ci-all inside root folder to install packages for all apps, and then edit root/package.json like the following:
  ```bash
  "scripts": {
    ...
    "local": "{original script} \"cd ../career && pnpm start\"",
    ...
  },
  ```
  Then run `pnpm run local` inside root folder. This runs all app at the same time. Open http://localhost:9000 to see the result.

# Contributing

Submit an issue or a pull request! :blush:

# Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/OscarWang114"><img src="https://avatars0.githubusercontent.com/u/30998659?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chih-Hao Wang</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/issues?q=author%3AOscarWang114" title="Bug reports">🐛</a> <a href="https://github.com/wasedatime/wasedatime-web/commits?author=OscarWang114" title="Code">💻</a> <a href="#design-OscarWang114" title="Design">🎨</a> <a href="https://github.com/wasedatime/wasedatime-web/commits?author=OscarWang114" title="Documentation">📖</a> <a href="#ideas-OscarWang114" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/wasedatime/wasedatime-web/pulls?q=is%3Apr+reviewed-by%3AOscarWang114" title="Reviewed Pull Requests">👀</a> <a href="#infra-OscarWang114" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/Lmmmmm"><img src="https://avatars1.githubusercontent.com/u/30943643?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Meng Li</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/commits?author=Lmmmmm" title="Code">💻</a> <a href="#design-Lmmmmm" title="Design">🎨</a> <a href="#ideas-Lmmmmm" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/Isabella-Ko"><img src="https://avatars0.githubusercontent.com/u/47520253?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Isabella-Ko</b></sub></a><br /><a href="#business-Isabella-Ko" title="Business development">💼</a> <a href="#design-Isabella-Ko" title="Design">🎨</a> <a href="#ideas-Isabella-Ko" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/JiaxianGu"><img src="https://avatars3.githubusercontent.com/u/43884711?v=4?s=100" width="100px;" alt=""/><br /><sub><b>JiaxianGu</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/issues?q=author%3AJiaxianGu" title="Bug reports">🐛</a> <a href="https://github.com/wasedatime/wasedatime-web/commits?author=JiaxianGu" title="Code">💻</a> <a href="#design-JiaxianGu" title="Design">🎨</a> <a href="#ideas-JiaxianGu" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/YHhaoareyou"><img src="https://avatars0.githubusercontent.com/u/43674499?v=4?s=100" width="100px;" alt=""/><br /><sub><b>YH_hao_are_you</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/issues?q=author%3AYHhaoareyou" title="Bug reports">🐛</a> <a href="https://github.com/wasedatime/wasedatime-web/commits?author=YHhaoareyou" title="Code">💻</a> <a href="#ideas-YHhaoareyou" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/wasedatime/wasedatime-web/pulls?q=is%3Apr+reviewed-by%3AYHhaoareyou" title="Reviewed Pull Requests">👀</a> <a href="#projectManagement-YHhaoareyou" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/AustinZhu"><img src="https://avatars1.githubusercontent.com/u/42071208?v=4?s=100" width="100px;" alt=""/><br /><sub><b>AustinZhu</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/issues?q=author%3AAustinZhu" title="Bug reports">🐛</a> <a href="https://github.com/wasedatime/wasedatime-web/commits?author=AustinZhu" title="Code">💻</a> <a href="#ideas-AustinZhu" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-AustinZhu" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-AustinZhu" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/NeroArcher"><img src="https://avatars3.githubusercontent.com/u/59641121?v=4?s=100" width="100px;" alt=""/><br /><sub><b>NeroArcher</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/commits?author=NeroArcher" title="Code">💻</a> <a href="#design-NeroArcher" title="Design">🎨</a> <a href="#ideas-NeroArcher" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/k-jomphon"><img src="https://avatars3.githubusercontent.com/u/38510009?v=4?s=100" width="100px;" alt=""/><br /><sub><b>k-jomphon</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/commits?author=k-jomphon" title="Code">💻</a> <a href="#design-k-jomphon" title="Design">🎨</a> <a href="#ideas-k-jomphon" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><img src="?s=100" width="100px;" alt=""/><br /><sub><b>Xia Zjou Zheng (George)</b></sub><br /><a href="#projectManagement" title="Project Management">📆</a> <a href="#ideas" title="Ideas, Planning, & Feedback">🤔</a> <a href="#business" title="Business development">💼</a></td>
    <td align="center"><a href="https://github.com/wanng-ide"><img src="https://avatars0.githubusercontent.com/u/32323900?v=4?s=100" width="100px;" alt=""/><br /><sub><b>wanng</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/commits?author=wanng-ide" title="Code">💻</a> <a href="#ideas-wanng-ide" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/nd-02110114"><img src="https://avatars3.githubusercontent.com/u/17228098?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daiki Nishikawa</b></sub></a><br /><a href="#ideas-nd-02110114" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://www.facebook.com/JawBoYue"><img src="https://graph.facebook.com/100000406482926/picture?type=large?s=100" width="100px;" alt=""/><br /><sub><b>Jaw Bo Yue</b></sub></a><br /><a href="#design" title="Design">🎨</a> <a href="#ideas" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/youenn98"><img src="https://avatars.githubusercontent.com/u/51810761?v=4?s=100" width="100px;" alt=""/><br /><sub><b>youenn98</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/commits?author=youenn98" title="Code, Ideas">💻🤔</a></td>
    <td align="center"><a href="https://github.com/hatoriMain"><img src="https://avatars.githubusercontent.com/u/51203739?s=460&u=0c77fed5e6c947cd424c601c4f365c17c45c6c4b&v=4" width="100px;" alt=""/><br /><sub><b>Zhen Cao</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/commits?author=hatoriMain" title="Code">💻</a> <a href="#design-hatoriMain" title="Design">🎨</a> <a href="#ideas-hatoriMain" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="#"><sub><b>Zenda Chen</b></sub></a><br /><a href="#" title="Business, Design, Ideas">💼🎨🤔</a></td>
    <td align="center"><a href="#"><sub><b>Kaiqing Chang</b></sub></a><br /><a href="#" title="Business, Design, Ideas">💼🎨🤔</a></td>
    <td align="center"><a href="https://github.com/kaedejima"><img src="https://avatars.githubusercontent.com/u/49092226?s=400&u=7f7d80600a0007aadc8a9e6d0df69e38088c5562&v=4" width="100px;" alt=""/><br /><sub><b>Kaede Iijima</b></sub></a><br /><a href="#code" title="Tutorials, Design">✅🎨</a></td>
    <td align="center"><a href="https://github.com/nichnarmada"><img src="https://avatars.githubusercontent.com/u/36405403?v=4" width="100px;" alt=""/><br /><sub><b>Nicholas Narmada</b></sub></a><br /><a href="#" title="Code, Ideas, Design, Planning, & Feedback">💻🎨🤔</a></td>
    <td align="center"><a href="https://github.com/ronin207"><img src="https://avatars.githubusercontent.com/u/59204227?v=4" width="100px;" alt=""/><br /><sub><b>Takumi Otsuka</b></sub></a><br /><a href="#" title="Code, Ideas, Design, Planning, & Feedback">💻🎨🤔</a></td>
    <td align="center"><a href="https://github.com/Autogod"><img src="https://avatars.githubusercontent.com/u/93040528?v=4" width="100px;" alt=""/><br /><sub><b>Jason Park</b></sub></a><br /><a href="#" title="Code, Business & Feedback">💻💼🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwasedatime%2Fwasedatime-web.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwasedatime%2Fwasedatime-web?ref=badge_large)