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
					pink: "#ffb9c2",
					purple: "#a2498b"
				}
			},
			fontFamily: {
				// 'nome-da-classe': ['Nome da Fonte no CSS', 'fonte-de-fallback']
				scandilover: ['"Scandilover Script"', "cursive"],
				karimun: ['Karimun', 'serif'],
				open_sans: ['"Open Sans"'],
				dm_serif: ['"DM Serif Display"'],
				sans: ["Inter", "system-ui", "sans-serif"], // Exemplo de como definir uma fonte principal
			},
		},
	},
	plugins: [],
};
