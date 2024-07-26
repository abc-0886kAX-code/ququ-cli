/*
 * @FilePath: \vue3x_template\src\hooks\service\useMapper.js
 * @Author: maggot-code
 * @Date: 2022-12-04 04:42:21
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-07-26 15:01:48
 * @Description:
 */
import { transArray } from '~/shared/trans'

export function useMapper(mapper) {
  const mapping = transArray(mapper)
  const mappingKeys = compact(mapping.map((item) => {
    const dict = transArray(item)
    if (dict.length < 2) {
      // TODO warning log
      return null
    };

    const [keys] = dict
    return keys
  }))

  function objectMapper(source) {
    return Object.keys(source).reduce((store, key) => {
      if (!mappingKeys.includes(key)) {
        store[key] = source[key]
        return store
      }

      const [before, after] = mapping.find(([value]) => eq(value, key))
      if (!Reflect.has(source, before)) {
        // TODO warning log
        store[key] = source[key]
        return store
      }

      store[after] = source[before]
      return store
    }, {})
  }
  function arrayMapper(source) {
    return transArray(source).map(data => objectMapper(data))
  }

  return {
    objectMapper,
    arrayMapper,
  }
}

export default useMapper
