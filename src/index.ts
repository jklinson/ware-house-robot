import * as readline from "readline/promises";
import WarehouseRobot from "./ware-house-robot";
import { Messages } from "./utils";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validCommands = new Set(["N", "S", "E", "W"]);

const initializeRobot = async () => {
  try {
    const commands = await rl.question("Enter the commands for the robot: ", {
      signal: AbortSignal.timeout(300_000),
    });

    const trimmedCommands = commands.trim();
    const commandArray = trimmedCommands.split(" ");

    const isValidCommands = commandArray.every((command) =>
      validCommands.has(command)
    );

    if (isValidCommands) {
      const robot = new WarehouseRobot();
      const result = robot.executeCommands(commandArray);
      console.log(result);
    } else {
      console.log(
        `${Messages.INVALID_COMMAND}, valid commands are ${[
          validCommands.values(),
        ]}`
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
    rl.close();
  }
};

initializeRobot();
