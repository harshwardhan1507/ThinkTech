export const tokens = {
  colors: {
    background: "#0B1120",
    surface: "#111827",
    surfaceRaised: "#1E293B",
    border: "#334155",
    accent: "#3B82F6",
    accentSoft: "#60A5FA",
    text: "#F8FAFC",
    textSecondary: "#CBD5E1",
    muted: "#94A3B8",
    achievement: "#C89B3C",
  },
  radius: {
    glass: "20px",
    card: "20px",
    pill: "999px",
  },
  shadows: {
    glass: "0 8px 32px rgba(0,0,0,0.25)",
    card: "0 24px 80px rgba(2,6,23,0.38)",
    glow: "0 0 80px rgba(59,130,246,0.22)",
  },
  glass: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    blur: "blur(24px)",
  },
  motion: {
    duration: {
      fast: 0.22,
      base: 0.44,
      slow: 0.72,
      dramatic: 1.0,
    },
    easing: [0.22, 1, 0.36, 1] as const,
    easings: {
      smooth: [0.22, 1, 0.36, 1] as const,
      snappy: [0.16, 1, 0.3, 1] as const,
      dramatic: [0.65, 0, 0.35, 1] as const,
      spring: [0.34, 1.56, 0.64, 1] as const,
    },
    stagger: {
      fast: 0.04,
      base: 0.08,
      slow: 0.12,
    },
    spring: {
      gentle: { stiffness: 120, damping: 20, mass: 1 },
      snappy: { stiffness: 300, damping: 30, mass: 0.8 },
      bouncy: { stiffness: 400, damping: 25, mass: 0.6 },
    },
    parallax: {
      slow: 0.15,
      medium: 0.3,
      fast: 0.5,
    },
  },
  z: {
    background: 0,
    content: 10,
    nav: 50,
    overlay: 80,
  },
} as const;
