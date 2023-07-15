// autoImport.ts
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const AutoRegistryComponents = () => {
	return Components({
		// 使用 Typescript，需要设置 dts 为 true
		dts: true,
		// dirs 指定组件所在位置，默认为 src/components
		// 可以让我们使用自己定义组件的时候免去 import 的麻烦
		dirs: ["src/components/"], // ++
		// 配置需要将哪些后缀类型的文件进行自动按需引入
		extensions: ["vue"], // ++
		// 解析的 UI 组件库，这里以 Element Plus 为例
		resolvers: [ElementPlusResolver()],
	});
};

export default AutoRegistryComponents;