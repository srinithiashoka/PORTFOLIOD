import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Group } from "three";
import { RoundedBox } from "@react-three/drei";

function RealisticLaptop() {
  const laptopRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y += delta * 0.2;
      laptopRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={laptopRef} rotation={[0.1, 0, 0]}>
      {/* Laptop Base/Bottom */}
      <RoundedBox args={[4, 0.15, 2.8]} radius={0.05} smoothness={4} position={[0, -0.5, 0]}>
        <meshStandardMaterial 
          color="#1e293b" 
          metalness={0.9}
          roughness={0.1}
        />
      </RoundedBox>
      
      {/* Keyboard area */}
      <RoundedBox args={[3.6, 0.05, 2.2]} radius={0.02} smoothness={4} position={[0, -0.4, 0.1]}>
        <meshStandardMaterial 
          color="#0f172a" 
          metalness={0.7}
          roughness={0.3}
        />
      </RoundedBox>
      
      {/* Keyboard keys - more realistic grid */}
      {Array.from({ length: 14 }).map((_, i) =>
        Array.from({ length: 5 }).map((_, j) => (
          <RoundedBox 
            key={`key-${i}-${j}`}
            args={[0.18, 0.03, 0.18]}
            radius={0.01}
            smoothness={2}
            position={[-1.5 + i * 0.23, -0.37, -0.7 + j * 0.23]}
          >
            <meshStandardMaterial 
              color="#1e293b"
              emissive="#06b6d4"
              emissiveIntensity={0.1}
              metalness={0.5}
              roughness={0.5}
            />
          </RoundedBox>
        ))
      )}
      
      {/* Trackpad */}
      <RoundedBox args={[1.2, 0.02, 0.8]} radius={0.02} smoothness={4} position={[0, -0.38, 0.8]}>
        <meshStandardMaterial 
          color="#334155"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>
      
      {/* Screen back */}
      <RoundedBox 
        args={[4, 2.5, 0.1]} 
        radius={0.05} 
        smoothness={4} 
        position={[0, 0.75, -1.35]} 
        rotation={[0.15, 0, 0]}
      >
        <meshStandardMaterial 
          color="#1e293b" 
          metalness={0.9}
          roughness={0.1}
        />
      </RoundedBox>
      
      {/* Screen bezel */}
      <RoundedBox 
        args={[3.8, 2.3, 0.08]} 
        radius={0.04} 
        smoothness={4} 
        position={[0, 0.75, -1.3]} 
        rotation={[0.15, 0, 0]}
      >
        <meshStandardMaterial 
          color="#0f172a" 
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>
      
      {/* Screen display - glowing */}
      <mesh position={[0, 0.75, -1.26]} rotation={[0.15, 0, 0]}>
        <planeGeometry args={[3.4, 2.0]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          emissive="#8b5cf6"
          emissiveIntensity={0.6}
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      
      {/* Screen content - code-like effect */}
      <mesh position={[0, 0.75, -1.25]} rotation={[0.15, 0, 0]}>
        <planeGeometry args={[3.2, 1.8]} />
        <meshStandardMaterial 
          color="#0f172a"
          emissive="#06b6d4"
          emissiveIntensity={0.4}
        />
      </mesh>
      
      {/* Code lines on screen */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh 
          key={`line-${i}`}
          position={[-1.2, 1.3 - i * 0.22, -1.24]} 
          rotation={[0.15, 0, 0]}
        >
          <planeGeometry args={[2 + Math.random() * 0.5, 0.08]} />
          <meshStandardMaterial 
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={0.6}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
      
      {/* Hinge */}
      <mesh position={[0, -0.4, -1.4]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.08, 0.08, 4, 16]} />
        <meshStandardMaterial 
          color="#334155"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Logo on screen bezel */}
      <mesh position={[0, 0.05, -1.28]} rotation={[0.15, 0, 0]}>
        <circleGeometry args={[0.1, 32]} />
        <meshStandardMaterial 
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

const FloatingLaptop = () => {
  return (
    <div className="w-full h-64 md:h-80">
      <Canvas camera={{ position: [0, 1, 7], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[-5, 2, 5]} intensity={0.8} color="#06b6d4" />
        <spotLight position={[0, 5, 2]} intensity={1.5} color="#ec4899" angle={0.3} penumbra={1} />
        <directionalLight position={[0, 2, 5]} intensity={0.5} color="#ffffff" />
        <RealisticLaptop />
      </Canvas>
    </div>
  );
};

export default FloatingLaptop;
