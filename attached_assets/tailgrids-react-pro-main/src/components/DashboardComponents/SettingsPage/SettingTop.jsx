import React from 'react';

const SettingTop = ({title, subtitle, button1, button2}) => {
  return (
    <div className='flex flex-wrap items-end justify-between sm:flex-nowrap sm:space-x-4 md:mb-6'>
      <div className='mb-6'>
        <h2 className='mb-2 text-2xl font-semibold text-black'>{title}</h2>
        <p className='text-sm font-medium text-body-color'>{subtitle}</p>
      </div>
      <div className='mb-6 flex items-center space-x-[18px]'>
        <button className='flex h-11 items-center justify-center rounded-sm border border-stroke bg-white px-6 text-base font-medium text-black hover:border-transparent hover:bg-danger hover:text-white'>
          {button1}
        </button>
        <button className='flex h-11 items-center justify-center rounded-sm border border-transparent bg-primary px-6 text-base font-medium text-white hover:bg-primary/90'>
          {button2}
        </button>
      </div>
    </div>
  )
}

export default SettingTop;
