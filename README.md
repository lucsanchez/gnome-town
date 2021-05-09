# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install

** clone this repository.

** Run the command  npm install to install dependencies.


## Available Scripts

In the project directory you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`
I used **Jest** with **Enzyme**.
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Project structure`
The **src/Components** folder contains the file **App.js** that it's where everything start
Inside the folder src and from top to bottom, you can find the **api** where I fetch the data. The **components** folder with main components (itemList and detail, custom hooks and providers)
I tried to show differents ways of sharing data through the app and also differnt uses of React hooks and custom hooks

For styling I choose Material UI with makeStyles to add styles to the elements. Web built responsive and mobile first design


The project it's only one routing with gnomes lists

![gnomesItems](https://user-images.githubusercontent.com/13258528/117590514-44601600-b106-11eb-817d-f184cd787450.png)

where you can filter by name or/and by profession, you can click in the arrow function that will open a full width dialog with gnome detail
![gnomeDetail](https://user-images.githubusercontent.com/13258528/117590545-66f22f00-b106-11eb-9412-af7313af1954.png)


### `Future improvements`
Paginate data, server side filtering and relational data structure for example I would like to click in a gnome's friend and be redirected to detail 
