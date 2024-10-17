import { Canvas } from '@react-three/fiber';
import Stage from './components/Stage';
import Product from './components/Product';
import { PresentationControls } from '@react-three/drei';
import { useEffect } from 'react';
import { state } from './store';
import { useSnapshot } from 'valtio';
const buttonColors = document.querySelectorAll('.box_colors button');

function App() {
  const snap = useSnapshot(state)
  useEffect(() => {
    buttonColors.forEach(buttonColor => {
      buttonColor.addEventListener('click', () => {
        console.log(buttonColor.getAttribute('data-color'));

      })
    })
  }, [])

  return (
    <>
      <Canvas
        camera={{
          fov: 50,
          near: 0.1,
          far: 1000,
          position: [-3.4189351742056484, 3.226554652012051, 9.572656375320348],
          quaternion: [-0.10309659339319302, -0.17134227831608942, -0.018031998972430373, 0.9796365464320064],
        }}
      >
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 0.2, tension: 200 }}
          polar={[-0.1, Math.PI / 4]}
          azimuth={[-Math.PI, Math.PI]}
        >
          <group position={[0, -1, 0]}>
            <Product />
            <Stage />
          </group>
        </PresentationControls>
      </Canvas>
    </>
  );
}

export default App;
