import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei';

function Model() {
  const mesh = useRef();
  const gltf = useGLTF('/models/chair/scene.gltf');

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return <primitive object={gltf.scene} ref={mesh} />;
}

function ARScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </Canvas>
  );
}

export default ARScene;
