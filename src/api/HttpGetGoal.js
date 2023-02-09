const axios = require("axios");

const URL =
  "https://challenge.crossmint.io/api/map/c3816146-40d2-45f3-b165-7525c2e6971f/goal";

async function HttpGetGoal() {
  try {
    const res = await axios.get(URL);
    return res.data.goal;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}

module.exports = { HttpGetGoal };
