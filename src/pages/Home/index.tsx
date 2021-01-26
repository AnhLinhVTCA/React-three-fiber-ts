import React, { FC, Suspense, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from 'types';
import { fetchTodo } from './thunks';
import { homeSelector } from './selector';
import { Canvas, useLoader, useThree, extend } from 'react-three-fiber';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Loading = () => {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial attach="material" color="white" transparent opacity={0.6} roughness={1} metalness={0} />
    </mesh>
  );
};

const Model = () => {
  const mesh = useRef();
  const materials = useLoader(MTLLoader, 'assets/ring3.mtl');
  const object = useLoader(OBJLoader, 'assets/ring3.obj', () => {
    materials.preload();
  });
  return <primitive object={object} ref={mesh} />;
};

const CameraController = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  useEffect(() => {
    const orbitControls = new OrbitControls(camera, domElement);
    orbitControls.maxPolarAngle = Math.PI;
    orbitControls.minAzimuthAngle = 0;
    orbitControls.enablePan = false;
    orbitControls.enableZoom = true;
    orbitControls.maxDistance = 35;
    orbitControls.minDistance = 10;
    orbitControls.minPolarAngle = 0;
    orbitControls.rotateSpeed = 0.5;

    return () => {
      orbitControls.dispose();
    };
  }, [camera, domElement]);
  return null;
};

const HomePage: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const home = useSelector(homeSelector);

  useEffect(() => {
    (async () => {
      const resultAction = await dispatch(fetchTodo({ value: 10 }));
      if (fetchTodo.fulfilled.match(resultAction)) {
        //TODO handle success
        console.log('handle success');
      } else {
        //TODO handle error
        console.log('handle error');
      }
    })();
  }, []);

  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <CameraController />
      <ambientLight intensity={0.5} />
      <spotLight position={[150, 150, 150]} intensity={0.5} />
      <pointLight position={[0, 0, -20]} intensity={0.55} />
      <Suspense fallback={<Loading />}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default HomePage;
