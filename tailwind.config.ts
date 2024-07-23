import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: {
          1: '#DCDCDC'
        },
        primary: '#1977F3',
        secondary: '#0F3F62',
        link: '#60A5FA',
        placeholder: '#8C94A3'
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-in-out",
        "fade-in": "fade-in 0.6s ease-in",
        "blurred-fade-in": "blurred-fade-in 0.9s ease-in-out",
        "pulse": "pulse 1s ease-in-out",
        "fade-out-down": "fade-out-down 0.6s ease-out"
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in": {
          "0%": {
            "opacity": "0"
          },
          "100%": {
            "opacity": "1"
          }
        },
        "blurred-fade-in": {
          "0%": {
            "filter": "blur(5px)",
            "opacity": "0"
          },
          "100%": {
            "filter": "blur(0)",
            "opacity": "1"
          }
        },
        "pulse": {
          "0%": {
            "transform": "scale(1)"
          },
          "50%": {
            "transform": "scale(1.1)"
          },
          "100%": {
            "transform": "scale(1)"
          }
        },
        "fade-out-down": {
          "0%": {
            "opacity": "1",
            "transform": "translateY(0)"
          },
          "100%": {
            "opacity": "0",
            "transform": "translateY(20px)"
          }
        }
      }
    },
  },
};
export default config;
