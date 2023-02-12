# 🗓️ Vitamin Calendar

This is a Simple Calendar view, with a basic form which lets users add events to the calendar.

<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). -->

## 🛠️ How it was built

This project was built with React, `react-bootstrap` and CSS. I've used a Google Font called 'Inter', and a free-of-rights custom favicon.

## 🤔 What it does

Just use the form to type an event name, day and time, and the event will be shown at the appropriate location on the calendar.

If two events happen at the same time, they will be shown side by side, and take an equal part of the column's width.

If an event name is not provided, a pop-up will show up to prompt the user to include one. The default event day is Monday, and the default event time is 9am.

## 👀 How to run it

Clone the repository and use the Terminal to `cd` into the project folder.

Run `yarn install` or `npm install` to make sure all the project's dependencies are installed. Using `yarn` is recommended when working with React projects - you can also use `npm` if you prefer.

If you encounter any issues, try to remove `node_modules` and to run `npm install` or `yarn install` and give it another go.

You should not have any problem to run the app on Chrome/Firefox/Edge or any Chromium-based Browser.

## ❌ Limitations

When starting this project, my goal was not to spend more than 2.5 hours on it - that is, recommended time plus extra time just in case.

The Calendar view currently has the expected functionality, but lacks animations. Events can only be an hour long, and can only start at pre-defined hours.

The `table` element used in this solution prevents events from being dragged and dropped to another day/time. This choice also means that we couldn't add controls to go from one week to another.
