/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'wedding-gold': '#E6D3A3',
                'wedding-dark': '#3C3D37'
            }
        }
    },
    plugins: []
}
