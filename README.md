# Crossmint Challenge

# Installation

### Setup:

$ gh repo clone thebgcs/crossmint_challenge
$ cd crossmint_challenge
$ npm i

### Be sure you have installed:

- [NodeJs](https://nodejs.org/en/)
- [Npm](https://docs.npmjs.com/)
- [Git](https://git-scm.com/)
- [AXIOUS](https://axios-http.com/docs/intro)

# Execution

**$ npm run start**

# Doc

### ## src/api/HttpGetGoal.js

It gets the JSON info to the final desired result, and it use AXIOS for it.

### ## src/Controller/controllerGoal.js

After receiving the current data from HttpGetGoal.js, it will handle in the controllerGoal.js the logic for each of the megaverse astral objects. (Polyanets, Soloons and Cometh).

### ## src/api/HttpNewGoal.js

After getting the logic in the controller, HttpNewGoal.js makes each one of the calls to the API and has a timer or sleep of 1 second to not get the error of many requests.
