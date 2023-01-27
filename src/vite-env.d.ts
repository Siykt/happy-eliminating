/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent, readonly } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  /** 棋盘矩阵一行长度 */
  readonly VITE_GAME_SETTING_MATRIX_ROW: string
  /** 棋盘矩阵一列长度 */
  readonly VITE_GAME_SETTING_MATRIX_COL: string
}
