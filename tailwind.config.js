// tailwind.config.js

export default {
	theme: {
		extend: {
			colors: {
        'brand-red': {
          500: "#eb061d",
          700: "#9c080c",
          900: "#620205",
        },
        'rose': {
          300: "#ffb9c2",
          500: "#c87d87",
        },
        'purple': {
          400: "#ef63cc",
          600: "#a2498b",
          800: "#80326b",
        },
        'text-dark': '#222222',
        'background-light': '#FFFFFF',
      },
			fontFamily: {
				scandilover: ['"Scandilover Script"', "cursive"],
				karimun: ['Karimun', 'serif'],
				open_sans: ['"Open Sans"'],
				dm_serif: ['"DM Serif Display"'],
				sans: ["Inter", "system-ui", "sans-serif"],
			},
			screens: {
			'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
			}
		},
	},
	plugins: [],
};
