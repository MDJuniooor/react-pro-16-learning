# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## React Conception

### 1. how to do react 

##### public/index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Primer</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

#### src/index.js

```
ReactDOM.render(<App />,  document.getElementById('root')); 
```
-  public/index.html 내에 <div id="root"><div> 안에 ReactDOM 주입하여 가상DOM 형식으로 동작
