import React from 'react';

const SettingTop = ({ title, subtitle }) => {
  return (
    <div className='mb-10 border-b border-stroke pb-6'>
      <h2 className='mb-2 text-2xl font-semibold text-black'>{title}</h2>
      <p className='text-sm font-medium text-body-color'>{subtitle}</p>
    </div>
  )
}

export default SettingTop;
