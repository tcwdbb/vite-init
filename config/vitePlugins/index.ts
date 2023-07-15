// index.ts
import type { Plugin, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImportDeps from "./autoImport";
import AutoRegistryComponents from "./component";
import eslintPlugin from "vite-plugin-eslint";


export function createVitePlugins(env: ConfigEnv) {
	const isBuild = env.command === "build";

	const vitePlugins: (Plugin | Plugin[])[] = [
		// vue支持
		vue({
			include: [/\.vue$/],
		}),
		eslintPlugin({
			include: ["src/**/*.ts", "src/**/*.vue", "src/*.ts", "src/*.vue"],
		}),
		// 自动按需引入组件
		AutoRegistryComponents(),
		// 自动按需引入依赖
		AutoImportDeps(),
	];
	return vitePlugins;
}

export default createVitePlugins;
