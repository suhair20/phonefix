// import React from "react";
import "./Introduction.css" 

// const PhoneFixIntro = () => {
//   return (
//     <div className="h-screen  text-1xl md:text-4xl flex items-center justify-center bg-gradient-to-tr from-blue-950 via-black to-blue-950">
//       <h2 className="intro-3d  font-serif ">LOBUY</h2>
//     </div>
//   );
// };
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Lightformer } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

// -------------------------------------------
// MODEL TARGET SIZES (Controls final size)
// -------------------------------------------
const modelTargetSizes = {
  headphones: 2.0, 
};

// -------------------------------------------
// OPACITY HELPER
// -------------------------------------------
function setModelOpacity(object, opacity) {
  object.traverse((child) => {
    if (child.isMesh) {
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      mats.forEach((mat) => {
        mat.transparent = true;
        mat.opacity = opacity;
        mat.needsUpdate = true;
      });
    }
  });
}

// -------------------------------------------
// HEADPHONE MODEL WITH SMOOTH COMING FORWARD
// -------------------------------------------
function AnimatedModel({ file, visible }) {
  const gltf = useGLTF(`/models/${file}`);
  const ref = useRef();

  useEffect(() => {
    if (gltf.scene) {
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const size = new THREE.Vector3();
      box.getSize(size);

      const maxSize = Math.max(size.x, size.y, size.z);
      const targetSize = modelTargetSizes[file.split(".")[0]] || 1;
      const scale = targetSize / maxSize;

      gltf.scene.scale.set(scale, scale, scale);

      // Start far away
      ref.current.position.z = 4;

      setModelOpacity(gltf.scene, 0);
    }
  }, [gltf, file]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (ref.current && gltf.scene) {
      // Smooth easing opacity
      const targetOpacity = visible ? 1 : 0;
      const lerpRate = visible ? 0.2 : 0.1;

      let currentOpacity = 0;
      gltf.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          currentOpacity = Array.isArray(child.material)
            ? child.material[0].opacity
            : child.material.opacity;
          return;
        }
      });

      const newOpacity = THREE.MathUtils.lerp(currentOpacity, targetOpacity, lerpRate);
      setModelOpacity(gltf.scene, newOpacity);

      // ----------------------------------------
      // SMOOTH COME FORWARD (EASE-IN)
      // ----------------------------------------
      const targetZ = visible ? 0 : 4;
      ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, targetZ, 0.08);

      // Small bounce movement
      ref.current.position.y = Math.sin(t * 1.5) * 0.03;

      // Rotation
      if (visible) ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={ref}>
      <primitive object={gltf.scene} />
    </group>
  );
}

// -------------------------------------------
// CAMERA CONTROLLER
// -------------------------------------------
function CameraControl({ step }) {
  const { camera } = useThree();

  useFrame(() => {
    const initialZ = 6;

    if (step === 1) {
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 6.5, 0.03);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.05, 0.03);
    } else {
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, initialZ, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0, 0.05);
    }

    camera.updateProjectionMatrix();
  });

  return null;
}

// -------------------------------------------
// MAIN INTRO COMPONENT
// -------------------------------------------
export default function Intro3DSequence() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timers = [];

    // Headphone starts after 1s
    timers.push(setTimeout(() => setStep(1), 1000));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-blue-950 via-black to-blue-950 flex items-center justify-center relative">

      <Canvas camera={{ position: [0, 0, 6], fov: 8 }}>
        <ambientLight intensity={0.6} />
        <spotLight position={[40, 40, 40]} intensity={100} angle={0.8} />

        <CameraControl step={step} />

        {/* Headphones with smooth forward animation */}
        <AnimatedModel file="headphoness.glb" visible={step === 1} />

        <Environment resolution={32}>
          <Lightformer intensity={4} position={[5, 0, -5]} scale={[10, 10, 1]} />
          <Lightformer intensity={4} position={[-5, 0, -5]} scale={[10, 10, 1]} />
          <Lightformer intensity={10} position={[0, 5, 0]} scale={[10, 2, 1]} />
        </Environment>
      </Canvas>

      <h1
        className="absolute text-5xl md:text-7xl font-extrabold text-white font-serif drop-shadow-[0_0_35px_#0ea5e9] transition-opacity duration-500"
       
      >
        <h2 className="intro-3d font-serif">LOBUY</h2>
      </h1>
    </div>
  );
}
