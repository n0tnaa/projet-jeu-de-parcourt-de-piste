import { Canvas } from "@react-three/fiber";
import OrthoCamera from "./OrthoCamera";

const Scene = () => {
  return (
    <Canvas>
      <OrthoCamera top={10} buttom={-10} left={5} right={-5} />
    </Canvas>
  );
};
export default Scene;
