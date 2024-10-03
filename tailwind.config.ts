import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages//*.{js,ts,jsx,tsx,mdx}",
    "./components//*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "923px",
      lg: "1070px",
      xl: "1440px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1150px",
        "2xl": "1150px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkblue: "var(--darkblue)",
        bggray: "var(--bggray)",
      },
    },
  },
  plugins: [],
};
export default config;
