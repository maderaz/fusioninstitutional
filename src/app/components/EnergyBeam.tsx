import { useEffect, useRef } from "react";

declare global {
  interface Window {
    UnicornStudio?: any;
  }
}

interface EnergyBeamProps {
  projectId?: string;
  className?: string;
}

export function EnergyBeam({
  projectId = "hRFfUymDGOHwtFe7evR2",
  className = "",
}: EnergyBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);
  const sceneRef = useRef<any>(null);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js";
    script.async = true;

    script.onload = () => {
      scriptLoadedRef.current = true;
      if (window.UnicornStudio && containerRef.current) {
        window.UnicornStudio.addScene({
          elementId: containerRef.current.id,
          projectId,
          scale: 1,
          dpi: 1,
          fps: 60,
          interactivity: {
            mouse: { disableMobile: true },
          },
        })
          .then((scene: any) => {
            sceneRef.current = scene;
          })
          .catch(() => {
            // Fallback: try init() method
            window.UnicornStudio.init();
          });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (sceneRef.current?.destroy) {
        sceneRef.current.destroy();
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [projectId]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
    >
      <div
        ref={containerRef}
        id="energy-beam-container"
        data-us-project={projectId}
        className="w-full h-full"
      />
      {/* Purple tint overlay to shift the beam's color toward our brand purple */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(139,92,246,0.12) 0%, rgba(88,28,235,0.08) 50%, rgba(139,92,246,0.15) 100%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
