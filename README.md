This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install or yarn`

To get all the dependencies in project.

### Install json-server by :

```bash
npm i -g json-server
```

We will save the data on the back end in a JSON file.

### Then run it by running:

```bash
json-server --watch db.json
```

In db.json , If you need to start with no data in calender. replace the existing content with:

```bash
{
  "calendar": []
}
```

### `yarn start or npm run start`

Next we run our app by running npm start in our app’s project folder and when the program asks you to run in a different port, select yes.

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
