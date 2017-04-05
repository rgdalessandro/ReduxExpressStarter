# ReduxExpressStarter

Use this webpack and ES2017 enabled boilerplate to quickly get started on a full stack application running React, React Router, Redux and Bootstrap Material on the frontend with Node and Express on the backend. If you would like a more lightweight boiler plate and do without Bootstrap Material, please checkout the branch called 'minimal' after cloning down the repo. If you would like to strip out Redux and Router, please checkout the branch called 'react-only' after cloning down the repo.

### Getting Started

There are two methods for getting started with this repo.

#### Development Environment?
Checkout this repo, install dependencies, then start the process with the following:

```
	> git clone https://github.com/rgdalessandro/ReduxExpressStarter.git
	> cd ReduxExpressStarter
	> npm install #(or yarn install)
	> npm run dev
```
Point your browswer to http://localhost:8080

#### Production Environment?
Checkout this repo, install dependencies, set environment variable, then start the process with the following:

```
	> git clone https://github.com/rgdalessandro/ReduxExpressStarter.git
	> cd ReduxExpressStarter
	> npm install #(or yarn install)
	> export NODE_ENV=production
	> npm run postinstall
	> npm start #(or pm2 start, or forever start)
```
Point your browswer to http://localhost:5000
