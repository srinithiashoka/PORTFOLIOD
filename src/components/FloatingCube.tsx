import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

function RotatingCube() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#a78bfa" 
        emissive="#a78bfa"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
}

const FloatingCube = () => {
  return (
    <div className="w-full h-64 md:h-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <RotatingCube />
      </Canvas>
    </div>
  );
};

export default FloatingCube;
