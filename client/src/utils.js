// Show log message
export function _log(msg, type = 'info') {
  if (process.env.NODE_ENV === 'development') {
    switch (type) {
      case 'error': {
        console.error('[LOG ERROR]::' + msg)

        break
      }
      default: {
        console.info('[LOG]::' + msg)
      }
    }
  }
}

// Capitalize text
export function _toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
