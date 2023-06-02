import type { ApolluxToaster } from '#components'
import type {
  DefaultProps,
  NinjaToasterBaseProps,
} from '@cssninja/nuxt-toaster'

// This type infer the props of ApolluxToaster component
type ApolluxToasterProps = Omit<
  InstanceType<typeof ApolluxToaster>['$props'],
  keyof DefaultProps
>

export function useToaster() {
  const $nt = useNinjaToaster()

  /**
   * Display a ApolluxToaster component
   */
  function show(props: ApolluxToasterProps, options?: NinjaToasterBaseProps) {
    return $nt.showComponent('ApolluxToaster', {
      props,
      options,
    })
  }

  return {
    show,
    clear: $nt.clear,
    clearAll: $nt.clearAll,
  }
}
