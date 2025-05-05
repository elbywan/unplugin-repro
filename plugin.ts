import type { UnpluginFactory } from "unplugin";
import { createUnplugin } from "unplugin";

export const unpluginFactory: UnpluginFactory<{ delay: number }> = ({ delay = 1000 }) => ({
  name: "my-plugin",
  resolveId: {
    filter: {
      id: /\?virtual\d+$/,
    },
    handler: async (id: string) => {
      await new Promise(resolve => setTimeout(resolve, delay));
      return id;
    },
  },
  load: {
    filter: {
      id: /\?virtual\d+$/,
    },
    handler: async (id: string) => {
      await new Promise(resolve => setTimeout(resolve, delay));
      return `console.log('${id}'); export default '${id}';`;
    },
  },
});

export const MyPlugin = /* #__PURE__ */ createUnplugin(unpluginFactory);
