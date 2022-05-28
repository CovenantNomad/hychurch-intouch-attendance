module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '576px'
      },
      colors: {
        'kobi': '#DD8AA5',
        'cosmos': '#FCC9D1',
        'quartz': '#EAE7F8',
        'tutu': '#F9E9E7',
        'cosmic-latte': '#E7F8F2',
        'panache': '#EFF7E4',
        'alice-blue': '#E6ECFF',
        'maya-blue': '#82A2FF',
        'golden-glow': '#FBD07A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    })
  ],
}
