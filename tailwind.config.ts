import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-work-sans)"],
                mono: ["var(--font-space-mono)"],
            },
            colors: {
                "mine-shaft-darken": "#3B3B3B",
                "mine-shaft-lighten": "#2B2B2B",
                heliotrope: "#A259FF",
                "friar-gray": "#858584",
                silver: "#CCCCCC",
            },
        },
    },
    plugins: [],
};
export default config;
