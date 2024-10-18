import { useGLTF } from '@react-three/drei';
import React from 'react';
import { useControls } from 'leva';
import { useThree, useFrame } from '@react-three/fiber';
export default function Stage(props) {
  const { nodes: node_bg } = useGLTF('models/bg.glb');
  const { nodes: node_man, materials } = useGLTF('models/man.glb');
  const colors = useControls({
    bg_color: '#f3f3f3',
    man_color: '#fff',
  });
  return (
    <>
      {/* Ground */}
      <group {...props} scale={3} dispose={null}>
        <mesh receiveShadow geometry={node_bg.bg.geometry} material={node_bg.bg.geometry}>
          <meshStandardMaterial color={colors.bg_color} />
        </mesh>
      </group>
      {/* man */}
      <group {...props} dispose={null}>
        <mesh geometry={node_man.Ludek02.geometry} position={[-2.573, 0, 0.01]}>
          <meshBasicMaterial color={colors.man_color} />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload('models/man.glb');
useGLTF.preload('models/bg.glb');
