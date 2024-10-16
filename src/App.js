import { Canvas } from '@react-three/fiber';
import Stage from './components/Stage';
import Product from './components/Product';
import { OrbitControls } from '@react-three/drei';
function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: 50,
          near: 0.1,
          far: 2000,
          position: [10, 10, 10],
        }}
      >
        <Product />
        <Stage />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
