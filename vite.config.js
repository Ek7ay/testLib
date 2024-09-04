import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 8088
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
     // 想要省略的后缀
     extensions: ['.js', '.json', '.ts'],
  },
  plugins: [
    vue(), 
  ],
  build: {
    outDir: 'dist',  //自定义构建输出目录
    lib: {
      entry: path.resolve(__dirname, './src/libs/jsppui/index.js'),  //入口文件路径
      name: 'JsppUI',  //暴露的全局变量
      fileName: 'JsppUI'  //是输出的包文件名  默认去packge.json的name
    },
    rollupOptions: {
      //确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        //在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }


})
