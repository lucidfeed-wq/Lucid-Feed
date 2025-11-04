import React from 'react';

const SubmitButton = ({children}) => {
  return (
    <div>
      <button className='flex h-11 w-full items-center justify-center rounded-md bg-primary text-base font-semibold text-white hover:bg-primary/90'>
        {children}
      </button>
    </div>
  )
}

export default SubmitButton
