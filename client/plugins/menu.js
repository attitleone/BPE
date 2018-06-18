export async function getMenu ({ items, title }) {
  try {
    const MenuItem = await MapItems({ items, title })
    return MenuItem
  } catch (error) {
    console.error(error.message)
  }
}

export async function MapItems (data) {
  return new Promise((resolve, reject) => {
    const Items = []
    data.title.map(value => {
      Items.push({
        title: true,
        name: value.Name,
        class: value.Class,
        wrapper: {
          element: '',
          attributes: {}
        }
      })

      data.items.filter(item => {
        return item.TitlePID === value.PID && !item.HideMenu
      }).map(value => {
        Items.push({
          'icon': value.Icon,
          'name': value.PageName,
          'url': value.URL,
          'Role': value.role,
          'children': ChildrenItems(value.children)
        })
      })
    })
    resolve(Items)
  })
}

export function ChildrenItems (data) {
  return data.filter(item => {
    return !item.HideMenu
  }).map(value => {
    return {
      'icon': value.Icon,
      'name': value.PageName,
      'url': value.URL,
      'Role': value.role,
      'children': ChildrenItems(value.children)
    }
  })
}
