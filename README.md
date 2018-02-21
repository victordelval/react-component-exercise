
## Table of Contents

- [Summary](#summary)
- [Project Dependencies](#project-dependencies)
- [Project Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Description of the Exercise](#description-of-the-exercise)
- [Internet Resources](#internet-resources)

## Summary
The goal of this project is to create a dropdown component with React, using best practices. This dropdown is also searchable and multi selection.



## Project Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Development dependencies:
```
  "devDependencies": {
    "enzyme": "^3.3.0",
    "react-addons-test-utils": "^15.6.2"
  },
```

Production dependencies:
```
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "1.1.0"
  },
```

### Testing the components

* **Jest**, a test runner built and maintained by Facebook (Delightful JavaScript Testing)

  * Easy Setup: Complete and easy to set-up JavaScript testing solution. Works out of the box for any React project.

  * Instant Feedback: Fast interactive watch mode runs only test files related to changed files and is optimized to give signal quickly.

  * Snapshot Testing: Capture snapshots of React trees or other serializable values to simplify testing and to analyze how state changes over time.

* **Enzyme**, by Airbnb, is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output. Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.


## Project Structure

The code of the application, the "src" folder, is organized in the following directories:

```
src/
  components/

  containers/

  index.css
  index.js
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

Jest has an integrated coverage reporter that works well with ES6 and requires no configuration.<br>
Run `npm test -- --coverage` to include a coverage report.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!


## Description of the Exercise

1. Break The UI Into A Component Hierarchy. Identify the components that make up the dropdown component.

    * MultiSearchDropdown
      * DropdownList
        * ListItem
      * DropdownBox
        * SearchBox
        * LabelList
          * LabelButton


2. Build a static version in React.

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class LabelButton extends React.Component {
    render() {
        const name = this.props.item.name;
        const code = this.props.item.code;
        return (
            <label className="button"
                data-code={code}>
                {name}
            </label>
        );
    }
}

class LabelList extends React.Component {
    render() {
        const collection = [];
        this.props.items.forEach((item) => {
            collection.push(
                <LabelButton
                    item={item}
                    key={item.code} />
            );
        });
        return (
            <span>
                {collection}
            </span>
        );
    }
}

class SearchBox extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
            </form>
        );
    }
}

class DropdownBox extends React.Component {
    render() {
        return (
            <div>
                <SearchBox />
                <LabelList items={this.props.items} />
            </div>
        );
    }
}

class ListItem extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <li className="item">
                {item.name}
            </li>
        );
    }
}

class DropdownList extends React.Component {
    render() {
        const collection = [];
        this.props.items.forEach((item) => {
            collection.push(
                <ListItem
                    item={item}
                    key={item.code} />
            );
        });
        return (
            <span>
                {collection}
            </span>
        );
    }
}

class MultiSearchDropdown extends React.Component {
    render() {
        return (
            <div>
                <DropdownBox items={this.props.data} />
                <DropdownList items={this.props.data} />
            </div>
        );
    }
}


const COUNTRIES = [
    { name: 'Spain', code: 'SP' },
    { name: 'Portugal', code: 'PT' },
    { name: 'France', code: 'FR' },
    { name: 'Italy', code: 'IT' },
    { name: 'Germany', code: 'DE' },
    { name: 'Netherlands', code: 'NL' }
];

ReactDOM.render(
    <MultiSearchDropdown data={COUNTRIES} />,
    document.getElementById('root')
);

```

3. Identify the minimal (but complete) representation of UI state

Simply ask three questions about each piece of data:

* Is it passed in from a parent via props? If so, it probably isn’t state.

* Does it remain unchanged over time? If so, it probably isn’t state.

* Can you compute it based on any other state or props in your component? If so, it isn’t state.

The state is (since they change over time and can’t be computed from anything)

* The search text the user has entered

* The selected items the user has selected

The original list of items is passed in as props, so that’s not state. The filtered list of items isn’t state because it can be computed by combining the original list of items with the search text.

4. Identify where your state should live

## Internet Resources

Basic:
* https://reactjs.org/docs/thinking-in-react.html

Testing:
* https://medium.com/@wvm/asynchronous-api-testing-in-react-cf3b180bc3d
