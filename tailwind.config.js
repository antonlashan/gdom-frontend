const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: { ...colors.violet, DEFAULT: colors.violet[700] },
                secondary: { ...colors.sky, DEFAULT: colors.sky[500] },
            },
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
        },
    },
    plugins: [],
};
