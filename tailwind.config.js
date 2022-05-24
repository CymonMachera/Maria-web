module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: "jit",
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {},
      
  variant: {},
  plugins: [require("@tailwindcss/forms")],
}
}
