# Redux News Reader Project

This project used Redux Toolkit’s createAsyncThunk and createSlice utilities to add asynchronous functionality to the Redux applications.

To run this application you will need know the React, Redux and React Toolkit concepts found here.[Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

## MSW-Mock Service Work used as an external API.

This project used [MSW-Mock Service Work](https://mswjs.io/docs/getting-started/install) to replicate the functionality of an external API.

Make sure that you have the mockServiceWorker.js in your root directory and run this command.

### `npm install msw --save-dev`

## Using FireFox Developer Version vs Google Chrome.

This project was tested using FireFox Developer Version Browser with React Developer Tools, and Redux DevTools extensions installed.
However, if you’re using  Google Chrome , you may need to perform this step in order to use MSW.  Follow steps to use [Google Chrome and enable third-party cookies](https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en).


## Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
