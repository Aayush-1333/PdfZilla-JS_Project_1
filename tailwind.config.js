/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./templates/*.html"],
  theme: {
    extend: {
      flexGrow: {
        0.05: '0.05'
      },

      backgroundImage: {
        'light-pattern': 'url("http://www.pinnaclefresh.com.au/images/pattern-icons/4.png")',
        'dark-pattern': 'url("http://www.pinnaclefresh.com.au/images/pattern-icons/5.png")'
      }

    },
  },
  
  variants: {
    backgroundImage: ['dark'],
  },
  plugins: [],
}
