# WaseTime

[![Build Status](https://travis-ci.org/wasetime/wasetime-web.svg?branch=master)](https://travis-ci.org/wasetime/wasetime-web)

[WaseTime](https://wasetime.com) (stands for Waseda Time) is an unonfficial web app for syllabus searching, classroom finding, and bus schedule checking at Waseda University.

## Getting Started

Currently this section is yet to be completed/refined. We will update it as frequent as possible.

### Prerequisites

### Installing

```bash
git clone https://github.com/wasetime/wasetime-web.git
cd wasetime-web
# install server-side node_modules
npm install
# install client-side node_modules
npm install --prefix client
```

### Running the app for developing

```bash
npm run dev
```

### App Architecture

![App Architecture](/docs/images/AppArchitecture.png)

### Continuous Integration and Deployment

This project is deployed on a remote server and uses Travis CI for continuous integration and deployment. You can learn more about the setup process at [ContinuousDeployment.md](docs/ContinuousDeployment.md)

Unfortunately, currently there are no unit tests
created to ensure the code quality.

## Built With

Back-end (Server):

* [Node.js](https://nodejs.org/) - Runtime environment used.
* [Express](http://expressjs.com/) - Node.js web app framework used.

Imported in code, but NOT being used for now:

* [MongoDB](https://www.mongodb.com/) - Database used for retrieving information.
* [mongoose](http://mongoosejs.com/) - Object modeling tool used for MongoDB.

Front-end (Client):

* [Create React App](https://github.com/facebook/create-react-app) - Main tool used for building the front-end application. See the [client directory](client/) for more details.
* [Redux](https://redux.js.org) - Library used to manage the state of front-end.
* [Styled Components](https://www.styled-components.com) - Library used for adding CSS to React components.

## Contributing

Submit an issue or a pull request! :blush:

## Contributors

* **Oscar Wang** - _Initial work_ - [OscarWang114](https://github.com/OscarWang114)
* **WANG JUNJIE** - _Bus schedule JSON conversion_ - [wanng-ide](https://github.com/wanng-ide)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
