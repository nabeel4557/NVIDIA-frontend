/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                "min-1480px": "1480px",
                "min-1280px": "1280px",
                "min-1080px": "1080px",
                "min-980px": "980px",
                "min-786px": "786px",
                "min-640px": "640px",
                "min-540px": "540px",
                "min-480px": "480px",
                "min-360px": "360px",
                "min-320px": "320px",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
};
