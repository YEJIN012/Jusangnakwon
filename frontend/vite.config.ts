import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
<<<<<<< HEAD
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
=======
>>>>>>> 752d3996b46f83042a1cc9f154f347ea55459cd2

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
<<<<<<< HEAD
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },

  plugins: [react(), tsconfigPaths()],
=======
    alias: [{ find: "@", replacement: "/src" }],
  },
>>>>>>> 752d3996b46f83042a1cc9f154f347ea55459cd2
});
