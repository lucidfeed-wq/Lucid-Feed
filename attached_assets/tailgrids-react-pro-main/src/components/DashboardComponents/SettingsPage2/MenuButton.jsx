import React from 'react';
import StateContext from './StateContext'

const MenuButton = () => {
  return (
    <StateContext.Consumer>
      {({ sidebarOpen, setSidebarOpen, trigger }) => (
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className='absolute left-4 top-9 flex h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-lg border border-stroke bg-white hover:bg-gray xl:hidden'
        >
          <svg width='20' height='20' viewBox='0 0 64 64'>
            <g>
              <path d='M61,30.3H3c-1,0-1.8,0.8-1.8,1.8S2,33.8,3,33.8h58c1,0,1.8-0.8,1.8-1.8S62,30.3,61,30.3z'></path>
              <path d='M61,47.9H3c-1,0-1.8,0.8-1.8,1.8S2,51.4,3,51.4h58c1,0,1.8-0.8,1.8-1.8S62,47.9,61,47.9z'></path>
              <path d='M3,16.1h58c1,0,1.8-0.8,1.8-1.8S62,12.6,61,12.6H3c-1,0-1.8,0.8-1.8,1.8S2,16.1,3,16.1z'></path>
            </g>
          </svg>
        </button>
      )}
    </StateContext.Consumer>
  )
}

export default MenuButton;
