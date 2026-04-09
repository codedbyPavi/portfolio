import { useEffect, useState } from "react";

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 h-44 w-44 rounded-full bg-pink-300/25 blur-3xl transition-transform duration-150"
      style={{ transform: `translate(${pos.x - 96}px, ${pos.y - 96}px)` }}
    />
  );
}

export default CursorGlow;
