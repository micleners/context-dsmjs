Character Builder - Demo App

This is a demo app used for a talk given on Aug 9, 2012. Figma's associated with the talk are located at: https://www.figma.com/file/2lRXqkbdmFNrll4WyZwUId/Context-dsmJS?node-id=0%3A1

This App contains examples of:

  - useState
  - useContext
  - Formik
  - React Redux
  - React Toolkit

Resources:

  - useContext + useReducer: https://kentcdodds.com/blog/how-to-use-react-context-effectively
  - useReducer + Toolkit: https://www.valentinog.com/blog/use-reducer/
  - Redux → Toolkit: https://blog.bitsrc.io/simplifying-redux-with-redux-toolkit-6236c28cdfcb
  - Redux → Toolkit: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux
  - JS Party – Episode #186: Getting hooked on React with Kent C. Dodds: https://changelog.com/jsparty/186
  - JS Party – Episode #146: Redux is definitely NOT dead with Mark Erikson: https://changelog.com/jsparty/146
  - Epic React by Kent C. Dodds: https://epicreact.dev/

Branches

0-character-example Contains a simple prop drilling app.
1-prop-drilling Adding more prop drilling. Also contains Formik.
2-context-for-me Replaces prop drilling outside of formik with useContext.
3-context-for-formik Replaces prop drilling within formik using useFormikContext.
5-useCharacter Replaces direct use of context with custom hook useCharacter.
7-useReducer Shows how to use context with useReducer similar to React Redux
8-redux-hooks Uses React Redux and hooks to do state management
⚠️WIP 6-redux
⚠️WIP 9-redux-toolkit

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
