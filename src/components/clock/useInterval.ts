import { useRef, useEffect } from 'react'

const useInterval = (cb: Function, delay = 0) => {
  const savedCb = useRef(cb)

  useEffect(() => {
    savedCb.current = cb
  })

  useEffect(() => {
    const tick = () => {
      savedCb.current()
    }
    const id = setInterval(tick, delay)

    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
