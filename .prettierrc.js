module.exports = {
	semi: true,
	arrowParens: "always",
	singleAttributePerLine: false,
	bracketSameLine: false,
	bracketSpacing: true,
	singleQuote: false,
	trailingComma: "none",
	endOfLine: "auto",
	useTabs: true,
	tabWidth: 3,
	printWidth: 80,
	importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
	importOrderSeparation: false,
	importOrderSortSpecifiers: true
};
