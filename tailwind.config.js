// tailwind.config.js

export default {
	theme: {
		extend: {
			colors: {
				primary: {
					light: "#eb061d",
					dark: "#9c080c",
				},
				secondary: {
					pink: {
						light: "#ffb9c2", 
						dark: "#ef63cc"
					},
					purple: {
						light: "#a2498b", 
						dark: "#80326b"
					}
				},
				red: "#620205"
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
