const { variants } = require("@catppuccin/palette");

let mocha = {};
for (const colour in variants.mocha) mocha[colour] = variants.mocha[colour].hex;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			...mocha
		},
		extend: {}
	},
	plugins: []
};
