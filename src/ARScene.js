import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ARButton, XR, useXR } from '@react-three/xr';
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { nodes } = useGLTF('/models/chair/scene.gltf');
  return <primitive object={nodes.mesh} />;
};

const ARButtonComponent = () => {
  const { isPresenting } = useXR();
  return (
    !isPresenting && 
    <ARButton 
      sessionInit={{ 
        requiredFeatures: ['hit-test'], 
        optionalFeatures: ['dom-overlay'], 
        domOverlay: { root: document.body } 
      }} 
    />
  );
};

const ARScene = () => {
  return (
    <div>
      <Canvas>
        <XR>
          <ambientLight intensity={0.5} />
          <directionalLight color="white" intensity={0.6} />
          <Model />
          <ARButtonComponent />
        </XR>
      </Canvas>
    </div>
  );
};

export default ARScene;
