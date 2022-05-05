module.exports = {
  content: [
    "./src/components/**/*.{js, jsx, ts, tsx}",
    "./src/pages/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'xs' : '576px'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
