/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        screens: {
            '3xl': {'max': '1650px'},

            '2xl': {'max': '1535px'},
            // => @media (max-width: 1535px) { ... }

            'xl': {'max': '1200px'},
            // => @media (max-width: 1279px) { ... }

            'lg': {'max': '1023px'},
            // => @media (max-width: 1023px) { ... }

            'md': {'max': '767px'},
            // => @media (max-width: 767px) { ... }

            'sm': {'max': '639px'},
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            colors: {
                'bg-primary': '#f6e9d8',
            },
            scale: {
                '-100': '-1',
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(360deg)" },
                    "50%": { transform: "rotate(0deg)" },
                },
                spinner: {
                    "0%": { transform: "rotate(360deg)" },
                    "100%": { transform: "rotate(0deg)" },
                },
            },
            animation: {
                rotater: "spinner 10s linear infinite",
                wiggle: "wiggle 10s linear infinite",
            },
        },
    },
    plugins: [],
}
