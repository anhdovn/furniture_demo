import { useLoader, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useEffect } from 'react';
import * as THREE from 'three';
import { CubeTextureLoader } from 'three';
const Env = ({ background = false }) => {
  const { gl, scene } = useThree();

  const [cubeMap] = useLoader(
    CubeTextureLoader,
    [['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']],
    (loader) => {
      // loader.setDataType(THREE.UnsignedByteType);
      loader.setPath('env/');
    }
  );
  useEffect(() => {
    const gen = new THREE.PMREMGenerator(gl);
    gen.compileEquirectangularShader();
    const cubeRenderTarget = gen.fromCubemap(cubeMap);
    cubeMap.dispose();
    gen.dispose();
    if (background) scene.background = cubeRenderTarget.texture;
    scene.environment = cubeRenderTarget.texture;
    return () => (scene.environment = scene.background = null);
  }, [cubeMap]);


  const {lightPos, fogColor} = useControls({
     lightPos: {value: [-8, 15, 4], step: 1,},
     fogColor: '#cccdcd',
   })

  return <>
    <directionalLight position={lightPos}  castShadow intensity={1.5}  shadow-mapSize={512} shadow-bias={-0.0000001}/>
    <ambientLight intensity={0.8} />
    <fog attach="fog" args={[fogColor, 15, 20]} />
  </>;
};

export default Env;
