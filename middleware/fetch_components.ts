import { Context } from '@nuxt/types'

export default ({ app: { $accessor } }: Context) => {
  if (process.server) {
    if ($accessor.components.getComponentsData.length === 0) {
      $accessor.components.fetchComponentsData()
    }
  }
}
