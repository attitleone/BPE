import { getMenu } from '../plugins/menu'
export default async ({ store }) => {
  const items = store.getters['auth/items']
  // store.dispatch('menu/setmenu', items)
  const Menu = await getMenu(items)
  store.dispatch('menu/setmenu', Menu)
}

