import { useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { useSnapshot } from 'valtio';
import { state } from '../store';
import gsap from 'gsap';
const buttonColors = document.querySelectorAll('.box_colors button');
export default function Product(props) {
  const { nodes, materials } = useGLTF('models/model.glb');
  const snap = useSnapshot(state);
  const door_1 = useRef();
  const door_2 = useRef();
  const door_3 = useRef();
  useEffect(() => {
    buttonColors.forEach((buttonColor) => {
      buttonColor.addEventListener('click', () => {
        const color = buttonColor.getAttribute('data-color');
        materials.mat_out.color.set(color);
        // materials.mat_door.color.set(color);
      });
    });
  }, []);
  const onPointerOver = () => {
    gsap.to(door_1.current.position, {
      duration: 0.5,
      z: 0.2,
      delay: 0,
      ease: 'power3.inOut',
    });
    gsap.to(door_2.current.position, {
      duration: 0.5,
      z: 0.4,
      delay: 0.1,
      ease: 'power3.inOut',
    });
    gsap.to(door_3.current.position, {
      duration: 0.5,
      z: 0.6,
      delay: 0.2,
      ease: 'power3.inOut',
    });
  };
  const onPointerOut = () => {
    gsap.to(door_1.current.position, {
      duration: 0.5,
      z: 0,
      delay: 0,
      ease: 'power3.inOut',
    });
    gsap.to(door_2.current.position, {
      duration: 0.5,
      z: 0,
      delay: 0.1,
      ease: 'power3.inOut',
    });
    gsap.to(door_3.current.position, {
      duration: 0.5,
      z: 0,
      delay: 0.2,
      ease: 'power3.inOut',
    });
  };
  return (
    <group {...props} dispose={null} onPointerOver={onPointerOver} onPointerOut={onPointerOut}>
      <group ref={door_3}>
        <mesh castShadow receiveShadow geometry={nodes.Cabinet.geometry} material={materials.mat_door} />
        <mesh castShadow receiveShadow geometry={nodes.Cabinet001.geometry} material={materials.mat_inner} />
        <mesh castShadow receiveShadow geometry={nodes.door_handle002.geometry} material={materials.mat_door_handle} />
      </group>
      <group ref={door_2}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CabinetA_DrawerMiddle_Drawer_0001.geometry}
          material={materials.mat_door}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CabinetA_DrawerMiddle_Drawer_0002.geometry}
          material={materials.mat_inner}
        />
        <mesh castShadow receiveShadow geometry={nodes.door_handle001.geometry} material={materials.mat_door_handle} />
      </group>
      <group ref={door_1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CabinetA_DrawerUpper_Drawer_0001.geometry}
          material={materials.mat_door}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CabinetA_DrawerUpper_Drawer_0002.geometry}
          material={materials.mat_inner}
        />
        <mesh castShadow receiveShadow geometry={nodes.door_handle.geometry} material={materials.mat_door_handle} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.CabinetA_Frame_Drawer_0.geometry} material={materials.mat_out} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CabinetA_Frame_Drawer_0001.geometry}
        material={materials.mat_inner}
      />
    </group>
  );
}

useGLTF.preload('models/model.glb');
