/** @type {import('tailwindcss').Config} */

import { presetVarlet } from '@varlet/preset-tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // 确保包括 Vue 文件
    "./src-electron/**/*.html",       // 扫描 Electron HTML 文件
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [presetVarlet()]
}