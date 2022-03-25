import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const useQuery = () => {
  const { search } = useLocation()

  return useMemo(() => new URLSearchParams(search), [search])
}

export const useConnectQuery = () => {
  const query = useQuery()
  return useMemo(() => query.get('connect'), [query])
}
