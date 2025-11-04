import React from 'react';
import StateContext from './StateContext'

const SidebarWrapper = ({ children }) => {
  return (
    <StateContext.Consumer>
      {({ sidebarOpen, setSidebarOpen, sidebar }) => (
        <div
          ref={sidebar}
          className={`fixed left-0 top-0 z-90 flex h-screen w-full max-w-[300px] flex-col justify-between bg-white shadow-card duration-200 xl:translate-x-0 ${
            sidebarOpen ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          {children}
        </div>
      )}
    </StateContext.Consumer>
  )
}

export default SidebarWrapper;
