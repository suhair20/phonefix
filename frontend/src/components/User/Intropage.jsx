import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, Lightformer } from "@react-three/drei";
import { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";
import "./Introduction.css";

const modelTargetSizes = {
  headphones: 3.0,
};

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

function AnimatedModel({ file, visible, onRotateStart }) {
  const gltf = useGLTF(`/models/${file}`);
  const ref = useRef();
  const rotationStartedRef = useRef(false);
  const opacityRef = useRef(0);

  useEffect(() => {
    if (gltf.scene) {
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxSize = Math.max(size.x, size.y, size.z);
      const targetSize = modelTargetSizes[file.split(".")[0]] || 1;
      const scale = targetSize / maxSize;
      gltf.scene.scale.set(scale, scale, scale);
      ref.current.position.z = 4;
      setModelOpacity(gltf.scene, 0);
    }
  }, [gltf, file]);

 useFrame((state, delta) => {
  const t = state.clock.getElapsedTime();
  if (!ref.current || !gltf.scene) return;

  opacityRef.current = THREE.MathUtils.lerp(
    opacityRef.current,
    visible ? 1 : 0,
    0.2
  );
  setModelOpacity(gltf.scene, opacityRef.current);

  const targetZ = visible ? 0 : 4;
  ref.current.position.z = THREE.MathUtils.lerp(
    ref.current.position.z,
    targetZ,
    0.06
  );
  const basey=0.1
  ref.current.position.y =basey + Math.sin(t * 1.5) * 0.03;

  if (visible && ref.current.position.z < 0.5 && !rotationStartedRef.current) {
    rotationStartedRef.current = true;
    onRotateStart();
  }

  if (visible) {
    ref.current.rotation.y += delta * 1; // ✅ FIXED
  }
});


  return (
    <group ref={ref}>
      <primitive object={gltf.scene} />
    </group>
  );
}
function CameraControl({ step }) {
  const { camera, size } = useThree();

  useFrame(() => {
    const aspect = size.width / size.height;

    // 🎯 One clean FOV system
    const baseFov = aspect < 1 ? 15 : 9;
    camera.fov = baseFov;

    camera.updateProjectionMatrix();

    if (step !== 1) return;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 10, 0.04);
    
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.1, 0.04);
  });

  return null;
}


export default function Intro3DSequence() {
  const [step, setStep] = useState(0);
  const [showText, setShowText] = useState(false);
  
  // Calculate FOV dynamically based on screen width
  

  useEffect(() => {
   

 
    
    setTimeout(() => setStep(1), 1000);
    
 
  }, []);

  return (
    <div className="w-full h-[100svh] max-h-[1000px] bg-gradient-to-tr from-blue-950 via-black to-blue-950 flex items-center justify-center relative">
      <Canvas
        dpr={1}
        camera={{ position: [0, 0, 3] }}
      >
        <ambientLight intensity={0.6} />
        <spotLight position={[40, 40, 40]} intensity={100} angle={0.8} />

        <CameraControl step={step} />

        <AnimatedModel
          file="headphoness.glb"
          visible={step === 1}
          onRotateStart={() => setShowText(true)}
        />

        <Environment resolution={32}>
          <Lightformer intensity={4} position={[5, 0, -5]} scale={[10, 10, 1]} />
          <Lightformer intensity={4} position={[-5, 0, -5]} scale={[10, 10, 1]} />
          <Lightformer intensity={10} position={[0, 5, 0]} scale={[10, 2, 1]} />
        </Environment>
      </Canvas>

      <h1 className={`absolute text-2xl md:text-7xl font-bold text-white font-serif lobuy-pop ${showText ? "lobuy-pop-show" : ""}`}>
        <span className="intro-3d">LOBUY</span>
      </h1>
    </div>
  );
}