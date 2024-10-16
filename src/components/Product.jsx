import { useGLTF } from '@react-three/drei';
import React from 'react';

export default function Product(props) {
  const { nodes, materials } = useGLTF('models/model.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CabinetA_DrawerLower_Drawer_0.geometry}
        material={materials['Drawer.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CabinetA_DrawerMiddle_Drawer_0.geometry}
        material={materials['Drawer.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CabinetA_DrawerUpper_Drawer_0.geometry}
        material={materials['Drawer.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CabinetA_Frame_Drawer_0.geometry}
        material={materials['Drawer.001']}
      />
    </group>
  );
}

useGLTF.preload('models/model.glb');
