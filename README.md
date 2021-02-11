## Cleo Frontend Interview - Bills

![TypeScript badge](https://img.shields.io/badge/TypeScript-73.8%25-1081c1 "Typescript")
![React-redux badge](https://img.shields.io/badge/react-redux-7.2.2-764abc "Redux")
![Redux Saga badge](https://img.shields.io/badge/redux-saga-1.1.3-764abc "Redux Saga")
![Styled Components badge](https://img.shields.io/badge/Styled%20Components-5.2.1-e433ea "Styled Components")

A SWA React/TypeScript which displays a list of Bills

[Live demo](http://cleo.cherino.me)

The technologies used to develop this project are:

* ReactJS
* TypeScript
* Redux Saga
* Styled Components

![Home page screenshot](home.png "Home Page")

*Interview instructions have been moved [here](./docs/instructions.md)*

## Selected Option: Option 2

For this technical test, I decided to go for **Option 2** in order to work a bit more in the UI. Please, find bellow the time used for every aspect of the app development:

* Functionality without UI: ~4.5 h
* UI: ~4 h

Please, to find more about why I spend more time than the suggested originally for the functionality side, see the section [`Challenges`](#markdown-header-challenges)

## Comments

I would like to start saying that I'm very happy with the final result, specially with the design of the UI. I really enjoy doing my own designs.

Regarding with the development, I found this technical assigment very exciting as it has been a good opportunity to display a wide range of skills.
One of the most instersting thing has been working using Sagas. Personally, I have always used redux + thunks as my state management tool, but after working in this app, I can seen the advantages that sagas offer on big scales.

I would like to flag that as I was running out of time, I only added tests where I considered it was more relevant for this project. Normally, I would try to cover most of the app. Please, let me know if these are enough.

## Challenges

My biggest challenge for this project has been working with Sagas.
As I mentioned before under the Comments section, I normally work with thunks therefore I have to spend a little more of the estimated time reading documentation about how to use integrate it and how to test it. It has been a great experience and without no doubt, it will be a skill that I will develop further.

## Technical details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
