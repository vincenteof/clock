import { useState, useCallback } from 'react'

const useUpdate = () => {
  const [, setDummy] = useState({})
  return useCallback(() => {
    setDummy({})
  }, [setDummy])
}

export default useUpdate
