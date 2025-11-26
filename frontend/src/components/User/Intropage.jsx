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

// --- Model target size (Remains small) ---
const modelTargetSizes = {
  headphones: 2.0, 
};

// --- Helper Functions (No Change) ---

function setModelOpacity(object, opacity) {
  object.traverse((child) => {
    if (child.isMesh) {
      const material = Array.isArray(child.material)
        ? child.material
        : [child.material];

      material.forEach((mat) => {
        if (mat) {
          mat.transparent = true;
          mat.opacity = opacity;
          mat.needsUpdate = true;
        }
      });
    }
  });
}

// --- AnimatedModel Component (No Change) ---

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
      
      ref.current.position.z = 2; 
      setModelOpacity(gltf.scene, 0); 
    }
  }, [gltf, file]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (ref.current && gltf.scene) {
      
      let targetOpacity;
      let lerpRate;

      if (visible) {
        targetOpacity = 1;
        lerpRate = 0.3; 
        
        ref.current.rotation.y += 0.01; 
        ref.current.rotation.x = 0; 
        ref.current.position.y = Math.sin(t * 1.5) * 0.03; 
        
        // Z-position transition: bring model to center Z=0
        ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, 0, 0.08); 
        
      } else {
        targetOpacity = 0;
        lerpRate = 0.1;

        // Move the invisible model further away
        ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, 2, 0.08); 
      }
      
      let currentOpacity = 0;
      gltf.scene.traverse((child) => {
          if (child.isMesh && child.material) {
              currentOpacity = Array.isArray(child.material) ? child.material[0].opacity : child.material.opacity;
              return; 
          }
      });
      
      const newOpacity = THREE.MathUtils.lerp(currentOpacity, targetOpacity, lerpRate);
      setModelOpacity(gltf.scene, newOpacity);
    }
  });

  return (
    <group ref={ref}>
      <primitive object={gltf.scene} />
    </group>
  );
}

// --- Camera Control Component (Adjusted for longer Z distance) ---

function CameraControl({ step }) {
    const { camera } = useThree();
    // 🚨 New initial Z position
    const initialCameraZ = 6; 

    useFrame(() => {
        if (step === 1) {
            // Subtle zoom-in during sequence, targeting a slightly closer spot
            camera.position.z = THREE.MathUtils.lerp(camera.position.z, 5.5, 0.03); 
            camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.05, 0.03); 
        } else {
            // Reset camera position 
            camera.position.z = THREE.MathUtils.lerp(camera.position.z, initialCameraZ, 0.05);
            camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0, 0.05);
        }
        camera.updateProjectionMatrix();
    });
    return null;
}

// --- Main Intro Sequence Component (Updated Camera and Light) ---

export default function Intro3DSequence() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timers = [];
    
    // 7 SECOND HEADPHONES-ONLY SEQUENCE TIMING
    timers.push(setTimeout(() => setStep(1), 1000)); 
    
  

    return () => timers.forEach(clearTimeout);
  }, [navigate]);

  return (
    <div className="w-full h-screen bg-gradient-to-tr from-blue-950 via-black to-blue-950 flex items-center justify-center relative">
        {/* 🚨 Updated Canvas camera position to Z=6 */}
        <Canvas camera={{ position: [0, 0, 6], fov: 10 }}> 
            <ambientLight intensity={0.5} />
            {/* 🚨 Moved spotlight further back to compensate for camera distance */}
            <spotLight position={[40, 40, 40]} angle={0.8} penumbra={1} intensity={100} castShadow /> 

            {/* Dynamic camera control */}
            <CameraControl step={step} />

            {/* ONLY SHOW THE HEADPHONES MODEL */}
            <AnimatedModel file="headphoness.glb" visible={step === 1} />

            {/* Studio-like environment for reflections */}
            <Environment resolution={32}>
                <Lightformer intensity={4} position={[5, 0, -5]} scale={[10, 10, 1]} target={[0, 0, 0]} />
                <Lightformer intensity={4} position={[-5, 0, -5]} scale={[10, 10, 1]} target={[0, 0, 0]} />
                <Lightformer intensity={10} position={[0, 5, 0]} scale={[10, 2, 1]} target={[0, 0, 0]} />
            </Environment>
        </Canvas>

        {/* Glowing LO BUY Text */}
        <h1 className={`absolute text-5xl md:text-7xl font-extrabold text-white font-serif tracking-wide drop-shadow-[0_0_35px_#0ea5e9] transition-opacity duration-500`}
            style={{
                opacity: step === 1 ? 1 : 0
            }}
        >
              <h2 className="intro-3d  font-serif ">LOBUY</h2>
        </h1>
    </div>
  );
}