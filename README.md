# SENG8120 Modern Automated Testing

## Purpose

This repository contains the code for assignment-3.

## Repository Usage

Clone this repository and navigate to the `src` directory:

```bash
git clone git@github.com:arunkjoyson/Assignment3.git
cd Assignment3/src
```
## Prerequisites

Ensure you have **Node.js (v14 or later)** installed on your system.  
If not, download and install it from [https://nodejs.org](https://nodejs.org).

## Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```
## Running the Software

To run the main function, use:

```bash
npm start
```

Ensure your `package.json` includes the following `scripts` section:

```json
"scripts": {
    "start": "ts-node src/main.ts",
    "build": "tsc",
    "test": "jest"
  }

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```

