import React, { useState, useEffect, useRef } from 'react'
import StateContext from './StateContext'

const SettingsPage = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const trigger = useRef(null)
  const sidebar = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <StateContext.Provider
      value={{ sidebarOpen, setSidebarOpen, trigger, sidebar }}
    >
      <div>
        {children}
      </div>
    </StateContext.Provider>
  )
}

export default SettingsPage
