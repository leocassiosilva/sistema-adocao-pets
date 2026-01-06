const listeners = {}

const bus = {
  on(event, callback) {
    if (!listeners[event]) {
      listeners[event] = []
    }
    listeners[event].push(callback)
  },

  emit(event, payload) {
    if (!listeners[event]) return
    listeners[event].forEach(callback => callback(payload))
  },

  off(event, callback) {
    if (!listeners[event]) return
    listeners[event] = listeners[event].filter(cb => cb !== callback)
  }
}

export default bus
