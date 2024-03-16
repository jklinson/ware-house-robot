import { Messages } from "./utils";

/* The WarehouseRobot class in TypeScript represents a robot that can move within a 10x10 grid based on
specific commands. */
export default class WarehouseRobot {
  private x: number;
  private y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  /**
   * The function `executeCommands` iterates through an array of commands, attempting to execute each one
   * and returning an error message if any command fails.
   * @param commands - It looks like the `executeCommands` method takes an array of strings as input,
   * where each string represents a command to be executed. The method iterates over each command,
   * attempting to execute it using the `move` method. If an error occurs during the execution of a
   * command, the method returns
   * @returns The `executeCommands` method returns a string. If an error occurs during the execution of
   * the commands, the error message is returned. Otherwise, if all commands are executed successfully,
   * it returns the message "SUCCESS_EXECUTION".
   */
  executeCommands(commands: Array<string>): string {
    for (const command of commands) {
      try {
        this.move(command);
      } catch (error: any) {
        console.log(error.message);
        return error.message;
      }
    }
    return Messages.SUCCESS_EXECUTION;
  }

  /**
   * The move function in TypeScript checks the direction input and updates the x or y coordinates
   * within certain bounds, throwing errors for invalid commands or moving outside the boundaries.
   * @param {string} direction - The `direction` parameter in the `move` function represents the
   * direction in which you want to move. It can be one of the following values: "N" (North), "S"
   * (South), "E" (East), or "W" (West). The function checks the current
   */
  move(direction: string) {
    switch (direction) {
      case "N":
        if (this.y < 9) {
          this.y++;
        } else {
          throw new Error(Messages.CANNOT_MOVE_OUTSIDE);
        }
        break;
      case "S":
        if (this.y > 0) {
          this.y--;
        } else {
          throw new Error(Messages.CANNOT_MOVE_OUTSIDE);
        }
        break;
      case "E":
        if (this.x < 9) {
          this.x++;
        } else {
          throw new Error(Messages.CANNOT_MOVE_OUTSIDE);
        }
        break;
      case "W":
        if (this.x > 0) {
          this.x--;
        } else {
          throw new Error(Messages.CANNOT_MOVE_OUTSIDE);
        }
        break;
      default:
        throw new Error(Messages.INVALID_COMMAND);
    }
  }

  /**
   * The `getPosition` function returns an object with the `x` and `y` properties of the current
   * object.
   * @returns The `getPosition()` function is returning an object with properties `x` and `y`, which
   * represent the current values of `this.x` and `this.y` respectively.
   */
  getPosition(): { x: number; y: number } {
    return {
      x: this.x,
      y: this.y,
    };
  }
}
