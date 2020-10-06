# WasedaTime

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wasedatime/wasedatime-web/blob/master/LICENSE.md) [![Build Status](https://travis-ci.com/wasedatime/wasedatime-web.svg?branch=master)](https://travis-ci.com/wasedatime/wasedatime-web) [![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors)

[WasedaTime](https://wasedatime.com) (stands for Waseda Timetable) is an unofficial web app for syllabus searching, classroom finding, and bus schedule checking at Waseda University.

## Getting Started

Currently this section is yet to be completed/refined. We will update it as frequent as possible.

### Prerequisites

### Installing

```bash
git clone https://github.com/wasedatime/wasedatime-web.git
cd wasedatime-web
# install server-side node_modules
npm ci
# install client-side node_modules
cd client
npm ci
```

### Running the app for developing

```bash
cd wasedatime-web
npm run dev
```

### App Architecture

![App Architecture](/docs/images/AWSArch.png)

### Continuous Integration and Deployment

This project is deployed on a remote server and uses Travis CI for continuous integration and deployment. You can learn more about the setup process at [ContinuousDeployment.md](docs/ContinuousDeployment.md)

Unfortunately, currently there are no unit tests
created to ensure the code quality.

## Built With

Serverless backend:

- [Amazon Web Service](https://aws.amazon.com/) - Fully powered by AWS.

Imported in code, but NOT being used in production for now:

- [MongoDB](https://www.mongodb.com/) - Database used for retrieving information.
- [mongoose](http://mongoosejs.com/) - Object modeling tool used for MongoDB.

Front-end (Client):

- [Create React App](https://github.com/facebook/create-react-app) - Main tool used for building the front-end application. See the [client directory](client/) for more details.
- [Redux](https://redux.js.org) - Library used to manage the state of front-end.
- [Styled Components](https://www.styled-components.com) - Library used for adding CSS to React components.

## Contributing

Submit an issue or a pull request! :blush:

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://www.oscarwang114.me"><img src="https://avatars0.githubusercontent.com/u/30998659?v=4" width="100px;" alt="WANG, Chih-Hao"/><br /><sub><b>WANG, Chih-Hao</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/issues?q=author%3AOscarWang114" title="Bug reports">🐛</a> <a href="https://github.com/wasedatime/wasedatime-web/commits?author=OscarWang114" title="Code">💻</a> <a href="#design-OscarWang114" title="Design">🎨</a> <a href="https://github.com/wasedatime/wasedatime-web/commits?author=OscarWang114" title="Documentation">📖</a> <a href="#ideas-OscarWang114" title="Ideas, Planning, & Feedback">🤔</a> <a href="#review-OscarWang114" title="Reviewed Pull Requests">👀</a> <a href="#infra-OscarWang114" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/wanng-ide"><img src="https://avatars0.githubusercontent.com/u/32323900?v=4" width="100px;" alt="wanng"/><br /><sub><b>wanng</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/commits?author=wanng-ide" title="Code">💻</a> <a href="#ideas-wanng-ide" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/nd-02110114"><img src="https://avatars3.githubusercontent.com/u/17228098?v=4" width="100px;" alt="Daiki Nishikawa"/><br /><sub><b>Daiki Nishikawa</b></sub></a><br /><a href="#ideas-nd-02110114" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://www.facebook.com/JawBoYue"><img src="https://graph.facebook.com/100000406482926/picture?type=large" width="100px;" alt="Jaw Bo Yue"/><br /><sub><b>Jaw Bo Yue</b></sub></a><br /><a href="#design" title="Design">🎨</a> <a href="#ideas" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/Lmmmmm"><img src="https://avatars1.githubusercontent.com/u/30943643?v=4" width="100px;" alt="Meng Li"/><br /><sub><b>Meng Li</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/issues?q=author%3ALmmmmm" title="Bug reports">🐛</a> <a href="https://github.com/wasedatime/wasedatime-web/commits?author=Lmmmmm" title="Code">💻</a> <a href="#design-Lmmmmm" title="Design">🎨</a> <a href="#ideas-Lmmmmm" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-Lmmmmm" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/Isabella-Ko"><img src="https://avatars0.githubusercontent.com/u/47520253?v=4" width="100px;" alt="Isabella-Ko"/><br /><sub><b>Isabella-Ko</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/commits?author=Isabella-Ko" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/JiaxianGu"><img src="https://avatars3.githubusercontent.com/u/43884711?v=4" width="100px;" alt="JiaxianGu"/><br /><sub><b>JiaxianGu</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/commits?author=JiaxianGu" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/YHhaoareyou"><img src="https://avatars0.githubusercontent.com/u/43674499?v=4" width="100px;" alt="YH_hao_are_you"/><br /><sub><b>YH_hao_are_you</b></sub></a><br /><a href="https://github.com/wasedatime/wasedatime-web/commits?author=YHhaoareyou" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
