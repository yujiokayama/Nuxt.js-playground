import { Context } from '@nuxt/types'

export default ({ redirect, app: { $accessor } }: Context) => {
  // サーバーサイド
  if (process.server) {
    // if () {}
  }
  // クライアントサイド
  if (process.client) {
  }
}
