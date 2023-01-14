/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./*.{js,jsx,ts,tsx}",
      "./public/*.{js,jsx,ts,tsx}",
      "./src/*.{js,jsx,ts,tsx}"
    ],
    mode: "jit",
    purge: ["./public/*.html", "./src/*.{js,jsx,ts,tsx,vue}"],
    theme: {
      screens: {
        'xsm': {max: '480px'},
        'sm': {max: '640px'},
      // => @media (min-width: 640px) { ... }
        'md': {max: '768px'},
        // => @media (min-width: 768px) { ... }
        'lgmax': {max: '1024px'},
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      extend: {}
    },
    plugins: [require("daisyui")],
  
    daisyui: {
      styled: true,
      themes: false,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark"
    }
  };