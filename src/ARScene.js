import React from 'react';
import { Canvas } from 'react-three-fiber';
import { ARButton } from '@react-three/drei';
import { useAR } from '@react-three/xr';

const Model = () => {
  const { gltf } = useLoader(GLTFLoader, '/models/chair/scene.gltf');
  return <primitive object={gltf.scene} />;
};

const ARScene = () => {
  const { isPresenting } = useAR();

  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight color="white" intensity={0.6} />
        <Model />
      </Canvas>
      {!isPresenting && <ARButton sessionInit={{ requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay'], domOverlay: { root: document.body } }} />}
    </div>
  );
};

export default ARScene;
