import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Quaternion } from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./tour_ia.glb");
  const group = useRef();
  const leftArm = useRef(null);
  const rightArm = useRef(null);
  const rightHand = useRef(null);
  const head = useRef(null);
  const rootBone = useRef(null);
  const leftArmBase = useRef({ x: 0, y: 0, z: 0 });
  const rightArmBase = useRef({ x: 0, y: 0, z: 0 });
  const rightHandBase = useRef({ x: 0, y: 0, z: 0 });
  const headBase = useRef({ x: 0, y: 0, z: 0 });
  const rightArmBaseQuat = useRef(new Quaternion());
  const rootBoneBase = useRef({
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
  });

  useEffect(() => {
    leftArm.current = computer.scene.getObjectByName("Arm.L_03");
    rightArm.current = computer.scene.getObjectByName("Arm.R_04");
    rightHand.current = computer.scene.getObjectByName("Arm.R_end_07");
    head.current = computer.scene.getObjectByName("Head_02");
    rootBone.current = computer.scene.getObjectByName("Root_00");

    if (leftArm.current) {
      leftArmBase.current = {
        x: leftArm.current.rotation.x,
        y: leftArm.current.rotation.y,
        z: leftArm.current.rotation.z,
      };
    }

    if (rightArm.current) {
      rightArmBase.current = {
        x: rightArm.current.rotation.x,
        y: rightArm.current.rotation.y,
        z: rightArm.current.rotation.z,
      };
      rightArmBaseQuat.current.copy(rightArm.current.quaternion);
    }

    if (rightHand.current) {
      rightHandBase.current = {
        x: rightHand.current.rotation.x,
        y: rightHand.current.rotation.y,
        z: rightHand.current.rotation.z,
      };
    }

    if (head.current) {
      headBase.current = {
        x: head.current.rotation.x,
        y: head.current.rotation.y,
        z: head.current.rotation.z,
      };
    }

    if (rootBone.current) {
      rootBoneBase.current = {
        position: {
          x: rootBone.current.position.x,
          y: rootBone.current.position.y,
          z: rootBone.current.position.z,
        },
        rotation: {
          x: rootBone.current.rotation.x,
          y: rootBone.current.rotation.y,
          z: rootBone.current.rotation.z,
        },
      };
    }
  }, [computer.scene]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const wave = Math.sin(time * 5.2);
    const support = Math.sin(time * 2.1 + Math.PI * 0.35);
    const nod = Math.sin(time * 1.6);

    if (group.current) {
      group.current.position.y = Math.sin(time * 1.4) * 0.015;
    }

    if (rootBone.current) {
      rootBone.current.position.set(
        rootBoneBase.current.position.x,
        rootBoneBase.current.position.y,
        rootBoneBase.current.position.z
      );
      rootBone.current.rotation.set(
        rootBoneBase.current.rotation.x,
        rootBoneBase.current.rotation.y,
        rootBoneBase.current.rotation.z
      );
    }

    if (rightArm.current) {
      rightArm.current.quaternion.copy(rightArmBaseQuat.current);
      rightArm.current.rotation.x -= 1.05;
      rightArm.current.rotation.y -= 0.22;
      rightArm.current.rotation.z -= 1.2 - wave * 0.75;
    }

    if (rightHand.current) {
      rightHand.current.rotation.x = rightHandBase.current.x + 0.1;
      rightHand.current.rotation.y = rightHandBase.current.y + wave * 0.85;
      rightHand.current.rotation.z = rightHandBase.current.z + wave * 0.32;
    }

    if (leftArm.current) {
      leftArm.current.rotation.x = leftArmBase.current.x - 0.18 + support * 0.08;
      leftArm.current.rotation.y = leftArmBase.current.y + 0.04;
      leftArm.current.rotation.z = leftArmBase.current.z + 0.06;
    }

    if (head.current) {
      head.current.rotation.y = headBase.current.y + nod * 0.08;
      head.current.rotation.z = headBase.current.z + Math.sin(time * 1.1) * 0.02;
    }
  });

  return (
    <group ref={group}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.035 : 0.05}
        position={isMobile ? [0, -3.7, 0] : [0, -5.4, 0]}
        rotation-y={0}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 1.5, 28], fov: 24 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
