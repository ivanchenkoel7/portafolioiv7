import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Carpeta de salida para los archivos construidos
    assetsInlineLimit: 0, // Asegúrate de que los activos no se inlinen, lo que permite que se manejen como archivos separados
  },
  resolve: {
    alias: {
      '@': '/src', // Permite usar '@' para referirse a la carpeta src
    },
  },
});