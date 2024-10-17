import { useGLTF, BakeShadows } from '@react-three/drei';
import React from 'react';
import { useControls } from 'leva';
import { useThree, useFrame } from '@react-three/fiber';
export default function Stage(props) {
  const { nodes } = useGLTF('models/bg.glb');

  return (
    <>
      {/* Fill */}
      <ambientLight intensity={0.5} />
      {/* Main */}

      <directionalLight
        position={[1, 10, -2]}
        intensity={1}
        shadow-camera-far={70}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-mapSize={[512, 512]}
        castShadow
      />

      {/* Strip */}
      <directionalLight position={[-10, -10, 2]} intensity={3} />
      {/* Ground */}
      <group {...props} scale={3} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.bg.geometry}>
          <meshStandardMaterial color={[0.9, 0.9, 0.9]} />
        </mesh>
      </group>
      {/* This freezes the shadow map, which is fast, but the model has to be static  */}
      <BakeShadows />
    </>
  );
}

useGLTF.preload('models/bg.glb');
