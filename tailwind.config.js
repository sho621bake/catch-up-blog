/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./src/**/*.{ts,tsx}'],
    mode: 'jit',
    content: [
        'src/pages/**/*.{js,ts,jsx,tsx}',
        'src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
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
