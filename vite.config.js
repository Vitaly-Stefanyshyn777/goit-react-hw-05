

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, 
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
      plugins: [visualizer()],
    },
    chunkSizeWarningLimit: 1000,
  },
});


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   base: "/goit-react-hw-05/", // Замініть на назву вашого репозиторію
//   plugins: [react()],
//   build: {
//     outDir: "dist", // Директорія для зібраних файлів
//     emptyOutDir: true, // Очищує папку перед новою збіркою
//   },
// });