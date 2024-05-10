import { Vector3 } from "three";
import { entityCarSchema } from "./Car.Schema";

export function entityCar() {
  const initialState = {
    score: 0,
    gravity: 0,
    velocity: new Vector3(0, 0, 0),
    position: new Vector3(0, 0, 0),
    direction: "idle",
    action: "idle",
    lastDirection: "idle"
  };
  return Object.freeze({
    ...entityCarSchema.parse(initialState),
    jmp: () => {},
    updateVelocity: (mousex: number) => {},
    updateGravity: (gravity: number) => {},
    updatePosition: (position: Vector3) => {}
  });
}
export type Car = ReturnType<typeof entityCar>;
