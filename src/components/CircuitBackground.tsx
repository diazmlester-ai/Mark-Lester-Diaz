import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

interface CircuitTrace {
  points: Point[];
  signals: {
    progress: number; // 0 to points.length - 1
    speed: number;
    size: number;
  }[];
  colorLight: string;
  colorDark: string;
}

export default function CircuitBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let traces: CircuitTrace[] = [];
    let animationFrameId: number;

    const generateTraces = (w: number, h: number) => {
      const list: CircuitTrace[] = [];
      const gridSpacing = 45;
      const numTraces = Math.min(105, Math.ceil((w * h) / 6000));

      for (let i = 0; i < numTraces; i++) {
        // Start trace on a grid intersection
        const cols = Math.floor(w / gridSpacing);
        const rows = Math.floor(h / gridSpacing);
        
        const startXCol = Math.floor(Math.random() * (cols - 2)) + 1;
        const startYRow = Math.floor(Math.random() * (rows - 2)) + 1;

        let curX = startXCol * gridSpacing;
        let curY = startYRow * gridSpacing;

        const points: Point[] = [{ x: curX, y: curY }];

        // Flow directions: 0 (right), 45 (down-right), 90 (down), 135 (down-left), 180 (left), 270 (up), etc.
        // Let's decide a primary flow direction for this package of line
        let currentAngle = (Math.floor(Math.random() * 8) * 45 * Math.PI) / 180;
        const segmentsCount = 2 + Math.floor(Math.random() * 3); // 2 to 4 segments per trace

        for (let s = 0; s < segmentsCount; s++) {
          const stepSize = (1 + Math.floor(Math.random() * 3)) * gridSpacing;
          
          const nextX = curX + Math.cos(currentAngle) * stepSize;
          const nextY = curY + Math.sin(currentAngle) * stepSize;

          // Clamp within margins
          const clampedX = Math.max(20, Math.min(w - 20, nextX));
          const clampedY = Math.max(20, Math.min(h - 20, nextY));

          // Snap back to grid spacing if clamped
          const gridSnapX = Math.round(clampedX / gridSpacing) * gridSpacing;
          const gridSnapY = Math.round(clampedY / gridSpacing) * gridSpacing;

          curX = gridSnapX;
          curY = gridSnapY;
          points.push({ x: curX, y: curY });

          // Change angle for next segment organically: turn either 45 or 90 degrees
          const turns = [-Math.PI / 2, -Math.PI / 4, Math.PI / 4, Math.PI / 2];
          const randomTurn = turns[Math.floor(Math.random() * turns.length)];
          currentAngle += randomTurn;
        }

        // Add 1 or 2 signal trackers on each trace
        const signals = [
          {
            progress: 0,
            speed: 0.006 + Math.random() * 0.012,
            size: 2 + Math.random() * 2,
          }
        ];

        if (Math.random() > 0.6) {
          signals.push({
            progress: 0.3 + Math.random() * 0.4,
            speed: 0.006 + Math.random() * 0.012,
            size: 2 + Math.random() * 2,
          });
        }

        // Colors (setting trace alphas to 60% visibility)
        list.push({
          points,
          signals,
          colorLight: `rgba(100, 116, 139, 0.60)`,
          colorDark: `rgba(236, 208, 111, 0.60)`, // premium gold hues at 60% opacity
        });
      }
      return list;
    };

    // Set canvas sizes accounting for device pixel ratio for ultimate high-DPI quality
    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        width = entryWidth;
        height = entryHeight;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = entryWidth * dpr;
        canvas.height = entryHeight * dpr;
        ctx.scale(dpr, dpr);

        traces = generateTraces(entryWidth, entryHeight) || [];
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Initial setup if ResizeObserver didn't complete immediately
    const rect = container.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    traces = generateTraces(width, height) || [];

    // Main animation draw loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Check current theme
      const isDark = document.documentElement.classList.contains("dark");

      // Set styles based on theme
      const traceColorFunc = (trace: CircuitTrace) => isDark ? trace.colorDark : trace.colorLight;
      const nodeFillColor = isDark ? "rgba(236, 208, 111, 0.60)" : "rgba(100, 116, 139, 0.60)";
      const signalColor = isDark ? "#ECD06F" : "#171717";
      const signalGlow = isDark ? "rgba(236, 208, 111, 0.82)" : "rgba(23, 23, 23, 0.65)";

      // Draw faint terminal background grid dots
      ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.03)";
      const dotSpacing = 45;
      for (let x = dotSpacing; x < width; x += dotSpacing) {
        for (let y = dotSpacing; y < height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw each trace
      traces.forEach((trace) => {
        if (trace.points.length < 2) return;

        // Draw Trace Lines
        ctx.strokeStyle = traceColorFunc(trace);
        ctx.lineWidth = 1.5;
        ctx.lineJoin = "miter";
        ctx.beginPath();
        ctx.moveTo(trace.points[0].x, trace.points[0].y);
        for (let k = 1; k < trace.points.length; k++) {
          ctx.lineTo(trace.points[k].x, trace.points[k].y);
        }
        ctx.stroke();

        // Draw Circuit Nodes (Circles) at the path intersections
        trace.points.forEach((pt, idx) => {
          const isEndNode = idx === 0 || idx === trace.points.length - 1;
          ctx.beginPath();
          if (isEndNode) {
            // Draw premium concentric outer ring for circuit termination nodes
            ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? "rgba(236, 208, 111, 0.60)" : "rgba(100, 116, 139, 0.60)";
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = nodeFillColor;
            ctx.fill();
            
            ctx.lineWidth = 1;
            ctx.strokeStyle = isDark ? "rgba(236, 208, 111, 0.60)" : "rgba(100, 116, 139, 0.60)";
            ctx.stroke();
          } else {
            // Standard simple routing point
            ctx.arc(pt.x, pt.y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = nodeFillColor;
            ctx.fill();
          }
        });

        // Update & Draw Flowing Signals
        trace.signals.forEach((sig) => {
          // Progress tracker
          sig.progress += sig.speed;
          if (sig.progress >= trace.points.length - 1) {
            sig.progress = 0;
          }

          const currentSegment = Math.floor(sig.progress);
          const segmentProgress = sig.progress - currentSegment;

          const p1 = trace.points[currentSegment];
          const p2 = trace.points[currentSegment + 1];

          if (p1 && p2) {
            // Interpolate position
            const sigX = p1.x + (p2.x - p1.x) * segmentProgress;
            const sigY = p1.y + (p2.y - p1.y) * segmentProgress;

            // Draw glowing data particle
            ctx.save();
            ctx.beginPath();
            ctx.arc(sigX, sigY, sig.size, 0, Math.PI * 2);
            ctx.shadowBlur = isDark ? 8 : 4;
            ctx.shadowColor = signalGlow;
            ctx.fillStyle = signalColor;
            ctx.fill();
            ctx.restore();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
      style={{
        maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block blur-[2px]"
      />
    </div>
  );
}
