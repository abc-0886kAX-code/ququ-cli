/*
 * @FilePath: \vue3x_cesium_template\src\biz\Tabs\usecase\useTabs.js
 * @Author: abc-0886kAX-code
 * @Date: 2023-02-01 13:45:09
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2023-03-08 10:39:22
 * @Description:
 */
import { TabsEntity } from '../entity/Tabs'
import EmptyView from '@/components/EmptyView.vue'

import { useShallowObject } from '@/hooks/ref/useShallowObject'
import { uuid } from '~/shared/uuid'
import { transArray, transBoolean, transFunction, transObject } from '~/shared/trans'

export function useTabs(props = {}) {
  const trans = transFunction(props.trans)
  const { source, state, has, take, bind, clear } = useShallowObject()
  const active = ref(get(props, 'default', uuid()))
  const component = computed(() => {
    if (!has(unref(active)))
      return EmptyView

    return take(unref(active)).template
  })
  const dataset = computed(() => {
    return Object.keys(unref(source)).map((keyword) => {
      return trans(take(keyword))
    })
  })
  function update(raw) {
    const entity = transObject(raw, TabsEntity())

    if (unref(state.unusable))
      return (active.value = uuid())

    if (has(entity.keyword))
      return (active.value = entity.keyword)

    return (active.value = unref(dataset)[0].keyword)
  }

  function setup(tabsource) {
    transArray(tabsource).forEach((tab, idx) => {
      const entity = TabsEntity(tab, idx)
      bind(entity.keyword, entity)
    })

    update()
  }

  onBeforeMount(() => {
    setup(props.data)
  })

  onBeforeUnmount(() => {
    if (transBoolean(props.release, true))
      clear()
  })

  return {
    active,
    component,
    dataset,
    update,
    setup,
    clear,
  }
}

export default useTabs
