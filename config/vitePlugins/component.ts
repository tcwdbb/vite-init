// autoImport.ts
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export const AutoImportDeps = () => {
	return AutoImport({
		// 使用 Typescript，需要设置 dts 为 true
		// dts: true,
		// 使用了 eslint，需要设置 eslintrc 字段
		eslintrc: {
			enabled: true,
			filepath: "./.eslintrc-auto-import.json",
			globalsPropValue: true,
		},
		imports: ["vue", "vue-router", "pinia"], // ++
		// 第三方组件库的解析器
		// resolvers: [ElementPlusResolver()],
	});
};

export default AutoImportDeps;