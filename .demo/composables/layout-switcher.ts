/**
 * This composables is used in conjunction with the LayoutSwitcher component.
 * It provides a simple way to switch between different layouts, for demo purposes.
 * Layout components are imported below to be made available to the composable.
 */

import {
  ApolluxCollapseLayout,
  ApolluxSidebarLayout,
  ApolluxTopnavLayout,
} from '#components'

export function useLayoutSwitcher() {
  const layouts = [
    {
      name: 'collapse',
      label: 'Collapse',
      component: ApolluxCollapseLayout,
    },
    {
      name: 'topnav',
      label: 'Top navigation',
      component: ApolluxTopnavLayout,
    },
    {
      name: 'sidebar',
      label: 'Sidebar',
      component: ApolluxSidebarLayout,
    },
  ]

  const activeLayoutName = useState('layout-switcher-active', () => 'collapse')
  const activeLayout = computed(() => {
    return layouts.find((layout) => layout.name === activeLayoutName.value)
  })
  const activeLayoutComponent = computed(() => {
    return activeLayout.value?.component || ApolluxCollapseLayout
  })

  return {
    layouts,
    activeLayout,
    activeLayoutName,
    activeLayoutComponent,
  }
}
