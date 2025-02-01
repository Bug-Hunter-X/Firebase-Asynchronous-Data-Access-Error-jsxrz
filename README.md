# Firebase Asynchronous Data Access Error
This repository demonstrates a common error in Firebase when accessing data asynchronously.  The error occurs when attempting to access a property of a document snapshot before the data has fully loaded.

## Bug
The `bug.js` file shows the problematic code. It tries to access the `name` property of a document snapshot immediately after retrieving it from Firebase.  This frequently results in an error because the data might not be available yet.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle asynchronous data retrieval in Firebase using `.then()` to ensure the data is loaded before access.

## How to reproduce
1. Clone this repository.
2. Install the Firebase SDK: `npm install firebase`
3. Configure your Firebase project and replace the placeholder values in the code with your project configuration.
4. Run `bug.js` and observe the error.
5. Run `bugSolution.js` and observe the successful data access.