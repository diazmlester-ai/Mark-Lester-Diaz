import { useEffect, useRef, useState } from "react";

interface GlowingCursorProps {
  isDarkMode: boolean;
}

export default function GlowingCursor({ isDarkMode }: GlowingCursorProps) {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const currentGlowPos = useRef({ x: -100, y: -100 });
  const currentRingPos = useRef({ x: -100, y: -100 });
  const currentDotPos = useRef({ x: -100, y: -100 });

  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const isFirst = !isVisible;
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      if (isFirst || currentGlowPos.current.x === -100) {
        currentGlowPos.current = { x: e.clientX, y: e.clientY };
        currentRingPos.current = { x: e.clientX, y: e.clientY };
        currentDotPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("clickable") ||
          target.closest(".clickable"))
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    // Animation loop using native web acceleration
    let animationFrameId: number;

    const updatePosition = () => {
      if (mousePos.current.x !== -100) {
        // Large ambient glow trails with gentle water-like latency (0.07)
        currentGlowPos.current.x += (mousePos.current.x - currentGlowPos.current.x) * 0.07;
        currentGlowPos.current.y += (mousePos.current.y - currentGlowPos.current.y) * 0.07;

        // Custom stylish outer circle trails with medium inertia (0.13)
        currentRingPos.current.x += (mousePos.current.x - currentRingPos.current.x) * 0.13;
        currentRingPos.current.y += (mousePos.current.y - currentRingPos.current.y) * 0.13;

        // Core dot snaps highly responsively (0.32)
        currentDotPos.current.x += (mousePos.current.x - currentDotPos.current.x) * 0.32;
        currentDotPos.current.y += (mousePos.current.y - currentDotPos.current.y) * 0.32;

        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${currentGlowPos.current.x}px, ${currentGlowPos.current.y}px, 0) translate(-50%, -50%)`;
          glowRef.current.style.opacity = isVisible ? "1" : "0";
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate3d(${currentRingPos.current.x}px, ${currentRingPos.current.y}px, 0) translate(-50%, -50%)`;
          ringRef.current.style.opacity = isVisible ? "1" : "0";
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${currentDotPos.current.x}px, ${currentDotPos.current.y}px, 0) translate(-50%, -50%)`;
          dotRef.current.style.opacity = isVisible ? "1" : "0";
        }
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <>
      {/* 1. Ultra-blurry soft golden glowing halo (A bit bigger and more ambient) */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-40 rounded-full bg-[#ECD06F]/15 blur-[120px] transition-[width,height] duration-300 ease-out sm:block hidden select-none"
        style={{
          width: isHoveringClickable ? "520px" : "380px",
          height: isHoveringClickable ? "520px" : "380px",
        }}
      />

      {/* 2. Sleek outer tracking ring (circle around the dot) */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed inset-0 z-50 rounded-full border-2 border-[#ECD06F]/50 bg-[#ECD06F]/8 transition-[width,height] duration-300 ease-out sm:block hidden select-none"
        style={{
          width: isHoveringClickable ? "58px" : "38px",
          height: isHoveringClickable ? "58px" : "38px",
          boxShadow: "0 0 16px rgba(236, 208, 111, 0.3)",
        }}
      />

      {/* 3. Sleek core visual cursor dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed inset-0 z-50 rounded-full bg-[#ECD06F] transition-[width,height] duration-300 ease-out sm:block hidden select-none"
        style={{
          width: isHoveringClickable ? "14px" : "9px",
          height: isHoveringClickable ? "14px" : "9px",
          boxShadow: "0 0 10px rgba(236, 208, 111, 0.9)",
        }}
      />
    </>
  );
}
