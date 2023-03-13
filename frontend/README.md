# Project Settings

### React + Vite + TypeScript

```typescript
npm install -g vite
npm init vite@latest frontend --template react-ts
```

### Redux Toolkit 및 필요한 종속 항목 설치

```ts
npm install @reduxjs/toolkit react-redux @types/react-redux
```

#### 절대경로 설정

##### 플러그인, node types 설치

```ts
npm i -D vite-tsconfig-paths @types/node
```

##### tsconfig.json 설정

```ts
{
  "compilerOptions": {
   // ...,
    "baseUrl": ".",
    "paths": {
      "@": [
        "src/*"
      ]
    }
  },
 // ...,
}
```

##### vite.config.ts에 절대경로 설정

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
    ],
  },

  plugins: [react(), tsconfigPaths()],
})
```
