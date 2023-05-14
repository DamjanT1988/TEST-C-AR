import React from 'react';
import { useXR } from '@react-three/xr';

const ARButton = ({ sessionInit }) => {
  const { player } = useXR();

  const onClick = async () => {
    if (!('XRSystem' in navigator)) {
      console.warn('WebXR API not available in this browser.');
      return;
    }

    const xr = navigator.xr;

    try {
      const session = await xr.requestSession('immersive-ar', sessionInit);
      await player?.setSession(session);
    } catch (err) {
      console.warn('Failed to create XR session.', err);
    }
  };

  return (
    <button onClick={onClick}>Start AR</button>
  );
};

export default ARButton;
