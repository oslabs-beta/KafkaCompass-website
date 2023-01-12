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