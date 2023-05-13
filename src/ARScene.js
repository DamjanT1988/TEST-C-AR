import React from 'react';
import { Canvas } from '@react-three/fiber'; // Import Canvas from here
import { ARButton, XR, useXR } from '@react-three/xr'; // Import ARButton, XR, and useXR
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { nodes } = useGLTF('/models/chair/scene.gltf'); // Removed unused 'materials'
  return <primitive object={nodes.mesh} />;
};

const ARScene = () => {
  const { isPresenting } = useXR();

  return (
    <div>
      <Canvas>
        <XR>
          <ambientLight intensity={0.5} />
          <directionalLight color="white" intensity={0.6} />
          <Model />
        </XR>
      </Canvas>
      {!isPresenting && <ARButton sessionInit={{ requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay'], domOverlay: { root: document.body } }} />}
    </div>
  );
};

export default ARScene;
