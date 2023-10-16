import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'

const env = loadEnv(process.env.MODE, process.cwd(), '');
export default {
  define: {
    'process.env': env,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "components": "/src/components",
      "hooks": "/src/hooks",
      "store": "/src/store",
      "utils": "/src/utils",
      "GUI": "/src/GUI",
      "models": "/src/models",
      "assets": "/src/assets",
      "public": "/public",
    },
  },
};
