/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [require('daisyui')],
    daisyui: {
        styled: true,
        themes: ['light', 'dark'],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
    },
}
