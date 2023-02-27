# Star Wars Wiki

<div align="center">
   <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
   <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
</div>


## About The App

Facts about Star Wars characters. It displays details about them as well as planets and starships associated with them.

## Built With

The app has been built mainly with React and Redux Toolkit.

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org//)
- [React Router](https://reactrouter.com/en/main)

## Getting Started

### Installation

1. Install NPM packages

   ```sh
   npm install
   ```

2. Open a new terminal and run `npm start` to start the app. This should open a new tab in your browser but if you are not redirected to localhost, head over to [https://localhost:3000/](https://localhost:3000/) to use the app.

## Future Improvements

Instead of using `createAsyncThunk`, I would use Redux Toolkit RTK Query as it can help eliminate the need to write thunks and reducers to manage data fetching.

Another improvment I would liked to work more on is the styling. For the loading component, I would have created a spinner.

Since the API did not return any image URLs, the cards do not display any images. I would have added some images so that the UI looks more better.