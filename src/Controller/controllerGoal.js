const { HttpGetGoal } = require("../api/HttpGetGoal");
const { HttpNewGoal } = require("../api/HttpNewGoal");

async function controllerGoal() {
  const goals = await HttpGetGoal();

  for (let row = 0; row < goals.length; row++) {
    for (let column = 0; column < goals[row].length; column++) {

      const currentGoal = goals[row][column]

      if (currentGoal.includes("COMETH")) {
        const [direction, type] = currentGoal.split("_");

        await HttpNewGoal({
          row,
          column,
          direction: direction.toLowerCase(),
          type,
        });
        await requestController();
      }
      if (currentGoal === "POLYANET") {
        const type = currentGoal;

        await HttpNewGoal({
          row,
          column,
          type,
        });
        await requestController();
      }

      if (currentGoal.includes("SOLOON")) {
        const [color, type] = currentGoal.split("_");
        await HttpNewGoal({
          row,
          column,
          color: color.toLowerCase(),
          type,
        });
        await requestController();
      }
    }
  }
}

async function requestController() {
  return new Promise((resolve) => setInterval(() => resolve(), 1000));
}

controllerGoal();
