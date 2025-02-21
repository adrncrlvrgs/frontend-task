# Useless Facts API Utility - Frontend Instructions

## **Overview**  
This project is a frontend utility that calls the **Useless Facts API** (`https://uselessfacts.jsph.pl/api/v2/facts/random`) 15 times and displays the fetched data in a table. The frontend provides buttons for users to download the data as a JSON or CSV file or print the data to the console.

## Features

- Fetches data from the Bored API 15 times.
- Displays the fetched data in a table format.
- Provides three buttons to:
  - Download JSON: Downloads the data as a JSON file.
  - Download CSV: Downloads the data as a CSV file.
  - Print to Console: Prints the data to the browser console.

## **Getting Started**  

### **Clone the Repository**  

- `git clone https://github.com/adrncrlvrgs/frontend-task`
- `cd frontend-task`
- `npm install`

## **Node version used**
- v21.1.0

## Available Scripts

In the project directory, you can run:

### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## **Dependencies Used**

- **axios**: For making HTTP requests.
- **react**: For building the user interface.
- **react-dom**: For DOM manipulation and rendering React components.
- **react-scripts**: A set of scripts used to start, build, and test the React app (default with Create React App).
- **web-vitals**: For measuring web performance metrics.
- **@testing-library/dom**: For testing DOM elements (default with Create React App).
- **@testing-library/jest-dom**: Provides custom jest matchers for DOM elements (default with Create React App).
- **@testing-library/react**: For testing React components (default with Create React App).
- **@testing-library/user-event**: For simulating user events in tests (default with Create React App).

## **Sass Setup**

If you encounter an error related to Sass, you can manually install it by running the following command:

```bash
npm install sass




