import React from 'react'

const ToolTip3 = () => {
  return (
    <div className='container mx-auto py-12'>
      <div className='-mx-4 flex flex-wrap justify-center'>
        <TooltipItem position='top' tooltipsText='ToolTip Text'>
          ToolTip On Top
        </TooltipItem>

        <TooltipItem position='bottom' tooltipsText='ToolTip Text'>
          ToolTip On Bottom
        </TooltipItem>

        <TooltipItem position='right' tooltipsText='ToolTip Text'>
          ToolTip On Right
        </TooltipItem>

        <TooltipItem position='left' tooltipsText='ToolTip Text'>
          ToolTip On Left
        </TooltipItem>
      </div>
    </div>
  )
}

export default ToolTip3

const TooltipItem = ({ children, tooltipsText, position }) => {
  return (
    <div className='w-full px-4 sm:w-1/2 lg:w-1/4'>
      <div className='mb-14'>
        <div className='group relative inline-block'>
          <button className='inline-flex rounded-sm bg-black py-2 px-[18px] text-base font-semibold text-white'>
            {children}
          </button>
          <div
            className={` ${
              (position === 'right' &&
                `bg-primary absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded-sm py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
              (position === 'top' &&
                `bg-primary absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded-sm py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
              (position === 'left' &&
                `bg-primary absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded-sm py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`) ||
              (position === 'bottom' &&
                `bg-primary absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded-sm py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100`)
            }`}
          >
            <span
              className={` ${
                (position === 'right' &&
                  `bg-primary absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-xs`) ||
                (position === 'top' &&
                  `bg-primary absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-xs`) ||
                (position === 'left' &&
                  `bg-primary absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-xs`) ||
                (position === 'bottom' &&
                  `bg-primary absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-xs`)
              } `}
            ></span>
            {tooltipsText}
          </div>
        </div>
      </div>
    </div>
  )
}
