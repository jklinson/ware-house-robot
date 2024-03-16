import { Messages } from "../src/utils";
import WareHouseRobot from "../src/ware-house-robot";

describe("Ware House Robot", () => {
  let robot: WareHouseRobot;

  beforeEach(() => {
    robot = new WareHouseRobot();
  });

  test("should move the robot within the warehouse boundaries", () => {
    expect(robot.executeCommands("N E N E N E N E".split(" "))).toBe(
      Messages.SUCCESS_EXECUTION
    );
    expect(robot.getPosition()).toMatchObject({ x: 4, y: 4 });
  });

  test("should not move the robot outside the warehouse boundaries", () => {
    expect(robot.executeCommands("N N N N N N N N N N N".split(" "))).toBe(
      Messages.CANNOT_MOVE_OUTSIDE
    );
    expect(robot.getPosition()).toMatchObject({ x: 0, y: 9 });
  });

  test("should handle invalid commands", () => {
    expect(robot.executeCommands("X".split(" "))).toBe(
      Messages.INVALID_COMMAND
    );
    expect(robot.getPosition()).toMatchObject({ x: 0, y: 0 });
  });
});
