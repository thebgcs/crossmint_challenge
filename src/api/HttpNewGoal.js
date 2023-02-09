const axios = require("axios");

const candidateId = "c3816146-40d2-45f3-b165-7525c2e6971f";

async function HttpNewGoal({ row, column, direction, color, type }) {
  try {
    const APIs = {
      cometh: {
        URL: "https://challenge.crossmint.io/api/comeths",
        dataRequest: {
          row,
          column,
          direction,
          candidateId,
        },
      },
      polyanet: {
        URL: "https://challenge.crossmint.io/api/polyanets",
        dataRequest: {
          row,
          column,
          candidateId,
        },
      },
      soloon:{
        URL: "https://challenge.crossmint.io/api/soloons",
        dataRequest: {
          row,
          column,
          color,
          candidateId,
        },
      }
    }[type.toLowerCase()];

    return await axios.post(APIs.URL, APIs.dataRequest);
  } catch (err) {
    throw new Error("Internal Server Error");
  }
}

module.exports = { HttpNewGoal };
