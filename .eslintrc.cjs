module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	root: true,
	extends: [
		"eslint-config-prettier",
		"eslint:recommended",
		"plugin:vue/vue3-recommended", // 使用插件支持vue3
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-essential",
		"./.eslintrc-auto-import.json",
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint", "vue"],
	rules: {
		indent: [1, "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": process.env.NODE_ENV === "production" ? ["error", { allow: ["error", "warn"] }] : "off", //生产模式不允许使用log
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off", //生产默认不允许使用debugger
		"@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: ".*", args: "none" }], //变量声明未使用
		"@typescript-eslint/no-explicit-any": "off", // 允许ts使用any
	},
};
