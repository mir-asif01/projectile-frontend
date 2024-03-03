import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const env = loadEnv(mode, process.cwd(), '');

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
  },
  plugins: [react()],
})
