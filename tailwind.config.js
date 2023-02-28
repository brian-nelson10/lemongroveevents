/** @type {import('tailwindcss').Config} */
module.exports = {
    
    content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
    theme: {
       
        extend: {
            fontFamily: {
                larissa: ['Larissa', 'cursive'],
                roboto: ['Roboto', 'sans-serif'],
                tomatoes: ['Tomatoes-O8L8', 'sans-serif']
            },
            fontSize: {
                'xlxl': '14rem'
            },
        },
    },

    plugins: [],
}