import { useEffect, useState } from 'react'
import bus from '../../utils/bus'

function Message() {
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const listener = ({ message, type }) => {
      setMessage(message)
      setType(type)
      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 3000)
    }

    bus.on('flash', listener)

    return () => {
      bus.off('flash', listener)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`
        fixed top-6 right-6 z-50
        px-6 py-4 rounded-lg shadow-lg
        text-sm font-semibold text-white
        transition-all duration-300 ease-in-out
        ${type === 'success' && 'bg-green-500'}
        ${type === 'error' && 'bg-red-500'}
      `}
    >
      {message}
    </div>
  )
}

export default Message
