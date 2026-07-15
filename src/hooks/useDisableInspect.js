import { useEffect } from 'react'

/**
 * Disables the right-click context menu and common DevTools keyboard
 * shortcuts (F12, Ctrl+Shift+I/J, Ctrl+U) across the whole app.
 * Mirrors the behavior of the original static site.
 */
export default function useDisableInspect() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault()

    const handleKeyDown = (e) => {
      const isDevToolsKey =
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')

      if (isDevToolsKey) e.preventDefault()
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
}
