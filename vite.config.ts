import { defineConfig, loadEnv, ConfigEnv } from "vite";
import createVitePlugins from "./config/vitePlugins/index";

// https://vitejs.dev/config/
export default defineConfig((env: ConfigEnv) => {
	const viteEnv = loadEnv(env.mode, `.env.${env.mode}`);
	return {
		plugins: createVitePlugins(env),
		resolve: {
			// 配置路径别名
			alias: {
				"@": "/src",
			},
		},
	};
});
