import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Stars } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

function Orb({ color, position, speed }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.8;
  });

  return (
    <Float speed={1.7} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh ref={ref} position={position}>
        <Icosahedron args={[1.2, 1]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.5} wireframe />
      </mesh>
    </Float>
  );
}

function BackgroundScene() {
  const [mouse, setMouse] = useState([0, 0]);
  useEffect(() => {
    const onMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 1.2;
      const y = (event.clientY / window.innerHeight - 0.5) * 1.2;
      setMouse([x, y]);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[2, 2, 2]} intensity={7} color="#F472B6" />
        <pointLight position={[-2, -2, 2]} intensity={6} color="#FB7185" />
        <group position={[mouse[0], -mouse[1], 0]}>
          <Orb color="#F9A8D4" position={[-3, 1, -1]} speed={0.3} />
          <Orb color="#F472B6" position={[2.8, -1.8, -1]} speed={0.25} />
          <Orb color="#FB7185" position={[0, 2.2, -2]} speed={0.2} />
        </group>
        <Stars radius={80} depth={30} count={260} factor={1.4} saturation={0} fade speed={0.6} />
      </Canvas>
    </div>
  );
}

export default BackgroundScene;
