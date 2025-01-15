import { computed, inject, provide, toValue } from 'vue'
import type { InjectionKey, Ref } from 'vue'
import type { BoardRow } from '../types'

export function useFilteredBoards<U extends BoardRow>(
  boards: Ref<U[]>,
  sortRefValue: Ref<string>,
  advancedFilterRefValues: Ref<string[]>,
) {
  const filterBoards = (boards: U[], filterValues: string[]): U[] => {
    return boards.filter((board) => {
      if (filterValues.length === 0)
        return true
      const status = filterValues.includes(board.status)
      const labels = Array.isArray(board.labels)
        ? board.labels.some(label => filterValues.includes(label.name))
        : filterValues.includes(board.labels)
      return status || labels
    })
  }
  const sortBoards = (boards: U[], sortValue: string): U[] => {
    return [...boards].sort((a, b): number => {
      if (sortValue === 'name') {
        return a.name.localeCompare(b.name)
      }
      if (sortValue === 'tasks') {
        return (b.tasks || 0) - (a.tasks || 0)
      }
      if (sortValue === 'date') {
        return (b.date ? +new Date(b.date) : 0) - (a.date ? +new Date(a.date) : 0)
      }
      return 0
    })
  }
  const filteredBoards = computed(() => {
    const sortValue = toValue(sortRefValue)
    const filterValues = toValue(advancedFilterRefValues)

    let result = filterBoards(boards.value, filterValues)
    if (sortValue !== 'default') {
      result = sortBoards(result, sortValue)
    }
    return result
  })

  return {
    filteredBoards,
  }
}

interface FilteredContext {
  sortModel: Ref<string>
  advancedModel: Ref<string[]>
}

type T = FilteredContext

const key: InjectionKey<FilteredContext> = Symbol('filtered-boards')

export function provideFilteredContext(value: T) {
  provide(key, value)
  return value
}

export function useFilteredContext<
  U extends T | undefined = T,
>(
  fallback?: U,
): U extends null ? T | null : T {
  const expanded = inject(key, fallback)
  if (expanded)
    return expanded as T

  if (expanded === null)
    return expanded as any

  throw new Error('not provided')
}
