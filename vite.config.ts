import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/datagrid/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': pathResolve('src') // 设置 @ 指向 src
    }
  },
})
