import React, { useRef } from 'react';
import { VRCanvas, DefaultXRControllers, useXR } from '@react-three/xr';
import { useGLTF } from '@react-three/drei';

function Model() {
  const { player } = useXR();
  const mesh = useRef();
  const gltf = useGLTF('/model.gltf');

  if (player) {
    mesh.current.position.set(player.position.x, player.position.y, player.position.z - 1);
  }

  return <primitive object={gltf.scene} ref={mesh} />;
}

function ARScene() {
  return (
    <VRCanvas>
      <DefaultXRControllers />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </VRCanvas>
  );
}

export default ARScene;
