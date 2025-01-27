/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins", sans-serif'],
        "poppins-bold": ['"Poppins Bold", sans-serif'],
        montserrat: ['"Montserrat", sans-serif'],
      },
      colors: {
        "bg-primary":"#B88E2F",
        "bg-skeleton":"#CBD5E1",
        "text-primary":"#212121",
        "text-secondary":"#636363",
      },
      backgroundImage: {
        "hero-image": 'url("@/assets/images/heroImage.png")',
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1286px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "0",
        xl: "0",
        "2xl": "0",
      },
    },
  },
  plugins: [],
};
