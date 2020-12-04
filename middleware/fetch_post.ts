import { Context } from '@nuxt/types'

export default async ({ redirect, app: { $accessor } }: Context) => {
  // サーバーサイド
  if (process.server) {
    if ($accessor.post.getPosts.length === 0) {
      await $accessor.post.fetchPosts()
    }
  }
  // クライアントサイド
  if (process.client) {
  }
}
