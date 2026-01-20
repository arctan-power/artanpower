import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: "#2C3E50",
          orange: "#E74C3C",
          gray: "#5D6D7E",
        },
        background: {
          light: "#F8F9FA",
          white: "#FFFFFF",
        },
        accent: {
          cyan: "#00D9FF",
          green: "#27AE60",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["64px", { lineHeight: "1.1", fontWeight: "700" }],
        "h1": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "h2": ["40px", { lineHeight: "1.3", fontWeight: "600" }],
        "h3": ["32px", { lineHeight: "1.4", fontWeight: "600" }],
        "body": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      spacing: {
        "section": "80px",
        "section-mobile": "40px",
      },
      boxShadow: {
        "card": "0px 4px 12px rgba(0,0,0,0.08)",
        "button": "0px 6px 16px rgba(0,0,0,0.12)",
        "hover": "0px 8px 24px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        "card": "12px",
        "button": "6px",
      },
    },
  },
  plugins: [],
};
export default config;
