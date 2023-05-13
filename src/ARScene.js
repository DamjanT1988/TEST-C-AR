import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei';
import { XR } from '@react-three/xr';

function Model() {
  const mesh = useRef();
  const gltf = useGLTF('/models/chair/scene.gltf');

  useFrame(({ camera }) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
      mesh.current.position.copy(camera.position);
      mesh.current.position.z -= 1;
    }
  });

  return <primitive object={gltf.scene} ref={mesh} />;
}

function ARScene() {
  return (
    <Canvas>
      <XR buttonPosition="bottom-right">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model />
      </XR>
    </Canvas>
  );
}

export default ARScene;
