/* RGS SVG Animated Tool Illustrations
   Animated dot-trail outlines of plumbing/drainage/maintenance tools
   Design: Industrial Precision Meets British Craft */
import { useEffect, useRef } from "react";

interface SVGToolProps {
  className?: string;
  animate?: boolean;
  color?: string;
  size?: number;
}

// Animated dot that travels along a path
function AnimatedDot({ pathId, duration = 3, delay = 0, color = "#5B9E1F" }: {
  pathId: string; duration?: number; delay?: number; color?: string;
}) {
  return (
    <circle r="4" fill={color} opacity="0.9">
      <animateMotion dur={`${duration}s`} repeatCount="indefinite" begin={`${delay}s`}>
        <mpath href={`#${pathId}`} />
      </animateMotion>
    </circle>
  );
}

// Wrench SVG with dot trail
export function WrenchSVG({ className = "", size = 200, color = "#5B9E1F" }: SVGToolProps) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <path id="wrench-outline"
          d="M 140 30 C 155 15 175 20 175 40 C 175 55 160 65 145 60 L 60 145 C 55 160 45 175 30 175 C 15 175 10 160 20 148 C 30 136 45 140 55 135 Z"
          fill="none"
        />
      </defs>
      {/* Static outline */}
      <use href="#wrench-outline" stroke={color} strokeWidth="3" fill="none" opacity="0.25" />
      {/* Animated draw */}
      <use href="#wrench-outline" stroke={color} strokeWidth="3" fill="none"
        strokeDasharray="600"
        strokeDashoffset="600"
        style={{ animation: "drawPath 2s ease forwards 0.3s", "--path-length": "600" } as React.CSSProperties}
      />
      {/* Dot trail */}
      <AnimatedDot pathId="wrench-outline" duration={3} delay={0.5} color={color} />
      <AnimatedDot pathId="wrench-outline" duration={3} delay={1.5} color="#D4A017" />
      {/* Bolt head circles */}
      <circle cx="148" cy="45" r="18" stroke={color} strokeWidth="2.5" fill="none" opacity="0.3" />
      <circle cx="148" cy="45" r="10" stroke={color} strokeWidth="2" fill="none" opacity="0.5" />
      <circle cx="148" cy="45" r="4" fill={color} opacity="0.6" />
    </svg>
  );
}

// Pipe/Plumbing SVG with dot trail
export function PlumbingSVG({ className = "", size = 200, color = "#5B9E1F" }: SVGToolProps) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <path id="pipe-path"
          d="M 20 80 L 80 80 L 80 40 L 160 40 L 160 80 L 180 80 L 180 120 L 160 120 L 160 160 L 80 160 L 80 120 L 20 120 Z"
          fill="none"
        />
        <path id="pipe-flow"
          d="M 20 100 L 80 100 Q 80 40 160 40 L 160 100 L 180 100"
          fill="none"
        />
      </defs>
      <use href="#pipe-path" stroke={color} strokeWidth="3" fill="none" opacity="0.2" />
      <use href="#pipe-path" stroke={color} strokeWidth="3" fill="none"
        strokeDasharray="700" strokeDashoffset="700"
        style={{ animation: "drawPath 2.5s ease forwards 0.2s", "--path-length": "700" } as React.CSSProperties}
      />
      <AnimatedDot pathId="pipe-flow" duration={2.5} delay={0} color={color} />
      <AnimatedDot pathId="pipe-flow" duration={2.5} delay={1.2} color="#D4A017" />
      <AnimatedDot pathId="pipe-flow" duration={2.5} delay={0.6} color={color} />
      {/* Water droplets */}
      {[100, 130, 160].map((x, i) => (
        <ellipse key={i} cx={x} cy={185} rx="5" ry="7" fill={color} opacity="0.3"
          style={{ animation: `floatUp ${2 + i * 0.5}s ease-in-out infinite ${i * 0.3}s` }}
        />
      ))}
    </svg>
  );
}

// CCTV Camera SVG
export function CCTVSvg({ className = "", size = 200, color = "#5B9E1F" }: SVGToolProps) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <path id="cctv-path"
          d="M 30 70 L 30 130 L 120 130 L 120 110 L 170 140 L 170 60 L 120 90 L 120 70 Z"
          fill="none"
        />
        <path id="cctv-mount"
          d="M 75 130 L 75 165 L 55 165 L 55 175 L 95 175 L 95 165 L 95 130"
          fill="none"
        />
      </defs>
      <use href="#cctv-path" stroke={color} strokeWidth="3" fill="none" opacity="0.2" />
      <use href="#cctv-path" stroke={color} strokeWidth="3" fill="none"
        strokeDasharray="500" strokeDashoffset="500"
        style={{ animation: "drawPath 2s ease forwards 0.4s", "--path-length": "500" } as React.CSSProperties}
      />
      <use href="#cctv-mount" stroke={color} strokeWidth="3" fill="none" opacity="0.4" />
      <AnimatedDot pathId="cctv-path" duration={3.5} delay={0.2} color={color} />
      <AnimatedDot pathId="cctv-path" duration={3.5} delay={1.8} color="#D4A017" />
      {/* Scan lines */}
      {[85, 100, 115].map((y, i) => (
        <line key={i} x1="35" y1={y} x2="115" y2={y} stroke={color} strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
      ))}
      {/* Lens */}
      <circle cx="75" cy="100" r="18" stroke={color} strokeWidth="2" fill="none" opacity="0.4" />
      <circle cx="75" cy="100" r="10" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="75" cy="100" r="4" fill={color} opacity="0.8" />
    </svg>
  );
}

// Drainage/Manhole SVG
export function DrainageSVG({ className = "", size = 200, color = "#5B9E1F" }: SVGToolProps) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <path id="drain-outer"
          d="M 100 20 A 80 80 0 1 1 99.9 20 Z"
          fill="none"
        />
        <path id="drain-spiral"
          d="M 100 100 m -60 0 a 60 60 0 1 1 120 0 a 60 60 0 1 1 -120 0"
          fill="none"
        />
      </defs>
      {/* Outer ring */}
      <circle cx="100" cy="100" r="80" stroke={color} strokeWidth="4" fill="none" opacity="0.2" />
      <circle cx="100" cy="100" r="80" stroke={color} strokeWidth="4" fill="none"
        strokeDasharray="502" strokeDashoffset="502"
        style={{ animation: "drawPath 3s ease forwards 0.1s", "--path-length": "502" } as React.CSSProperties}
      />
      {/* Inner rings */}
      {[60, 40, 20].map((r, i) => (
        <circle key={i} cx="100" cy="100" r={r} stroke={color} strokeWidth="2" fill="none" opacity={0.15 + i * 0.1} />
      ))}
      {/* Grid lines */}
      {[-60, -30, 0, 30, 60].map((offset, i) => (
        <line key={`h${i}`} x1={100 + offset} y1="20" x2={100 + offset} y2="180" stroke={color} strokeWidth="1.5" opacity="0.12" />
      ))}
      {[-60, -30, 0, 30, 60].map((offset, i) => (
        <line key={`v${i}`} x1="20" y1={100 + offset} x2="180" y2={100 + offset} stroke={color} strokeWidth="1.5" opacity="0.12" />
      ))}
      {/* Animated dots */}
      <AnimatedDot pathId="drain-outer" duration={4} delay={0} color={color} />
      <AnimatedDot pathId="drain-outer" duration={4} delay={2} color="#D4A017" />
      <circle cx="100" cy="100" r="8" fill={color} opacity="0.5" />
      <circle cx="100" cy="100" r="4" fill={color} opacity="0.9" />
    </svg>
  );
}

// Service Package / Shield SVG
export function ShieldSVG({ className = "", size = 200, color = "#5B9E1F" }: SVGToolProps) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <path id="shield-path"
          d="M 100 15 L 170 45 L 170 100 C 170 145 135 175 100 185 C 65 175 30 145 30 100 L 30 45 Z"
          fill="none"
        />
      </defs>
      <use href="#shield-path" stroke={color} strokeWidth="3" fill="none" opacity="0.2" />
      <use href="#shield-path" stroke={color} strokeWidth="3" fill="none"
        strokeDasharray="600" strokeDashoffset="600"
        style={{ animation: "drawPath 2.5s ease forwards 0.2s", "--path-length": "600" } as React.CSSProperties}
      />
      <AnimatedDot pathId="shield-path" duration={4} delay={0.3} color={color} />
      <AnimatedDot pathId="shield-path" duration={4} delay={2} color="#D4A017" />
      {/* Checkmark */}
      <path d="M 70 100 L 90 120 L 130 80" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"
        strokeDasharray="100" strokeDashoffset="100"
        style={{ animation: "drawPath 0.8s ease forwards 2s", "--path-length": "100" } as React.CSSProperties}
      />
    </svg>
  );
}

// Emergency / Lightning bolt SVG
export function EmergencySVG({ className = "", size = 200, color = "#D4A017" }: SVGToolProps) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <path id="bolt-path"
          d="M 120 20 L 70 110 L 100 110 L 80 180 L 150 90 L 115 90 Z"
          fill="none"
        />
      </defs>
      <use href="#bolt-path" stroke={color} strokeWidth="3" fill="none" opacity="0.2" />
      <use href="#bolt-path" stroke={color} strokeWidth="3" fill="none"
        strokeDasharray="400" strokeDashoffset="400"
        style={{ animation: "drawPath 1.5s ease forwards 0.2s", "--path-length": "400" } as React.CSSProperties}
      />
      <AnimatedDot pathId="bolt-path" duration={2} delay={0} color={color} />
      <AnimatedDot pathId="bolt-path" duration={2} delay={1} color="#5B9E1F" />
      {/* Glow rings */}
      {[40, 60, 80].map((r, i) => (
        <circle key={i} cx="100" cy="100" r={r} stroke={color} strokeWidth="1" fill="none" opacity={0.06 + i * 0.02}
          style={{ animation: `floatUp ${3 + i}s ease-in-out infinite ${i * 0.5}s` }}
        />
      ))}
    </svg>
  );
}
