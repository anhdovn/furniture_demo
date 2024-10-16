import { Canvas } from '@react-three/fiber';
import Env from './components/Env';
function App() {
  return (
    <>
    <Canvas
        camera={{
          fov: 50,
          near: 0.1,
          far: 2000,
          position: [3, 1.2, 0],

        }}
      >
        <ambientLight />
        <Env />

      </Canvas>
    </>
  );
}

export default App;
