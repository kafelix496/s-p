import { useCallback, useEffect, useRef, useState } from "react"
import { LocalStorageKey } from "../constants/app"
import { List } from "../types/resourceList"

export const useResources = () => {
  const lastDeleteListRef = useRef<List[] | null>(null)
  const [list, setList] = useState<List[]>(JSON.parse(window.localStorage.getItem(LocalStorageKey.RESOURCES) ?? '') || [])

  const addList = useCallback((newList: List): boolean => {
    let hadDuplicatedId = false

    setList((lists) => {
      if (lists.find((list) => list.id === newList.id) === undefined) {
        lastDeleteListRef.current = null

        return lists.concat(newList)
      }

      hadDuplicatedId = true

      return lists
    })

    return hadDuplicatedId
  }, [setList])

  const deleteListItem = useCallback((id: number): void => {
    setList((lists) => {
        lastDeleteListRef.current = lists

        return lists.filter((list) => list.id !== id)
    })
  }, [setList])

  useEffect(() => {
    const keydownEventHandler = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'z' && lastDeleteListRef.current) {
        setList(lastDeleteListRef.current)
      }
    }

    window.localStorage.setItem(LocalStorageKey.RESOURCES, JSON.stringify(list))

    document.addEventListener('keydown', keydownEventHandler)

    return () => {
      document.removeEventListener('keydown', keydownEventHandler)
    }
  }, [list, setList])

  return {
    list,
    addList,
    deleteListItem
  }
}
