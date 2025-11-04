import React, { useState } from 'react'

const TableStack5 = () => {
  return (
    <section className='relative z-10 overflow-hidden bg-white py-20 lg:py-[100px]'>
      <div className='container mx-auto'>
        <TableStackWrapper title='Checkbox List'>
          <StackItem
            id='1'
            nameBg='[#FFB52B]'
            shortName='MC'
            name='Musharof Chowdhury'
            position='Founder & CEO'
          />
          <StackItem
            id='2'
            nameBg='[#00BFD9]'
            shortName='NR'
            name='Naimur Rahman'
            position='Product Designer'
          />
          <StackItem
            id='3'
            nameBg='[#4926BD]'
            shortName='SH'
            name='Shafiq Hammad'
            position='Frontend Developer'
          />
          <StackItem
            id='4'
            nameBg='[#094285]'
            shortName='MH'
            name='Mahbub Hasan'
            position='Backend Developer'
          />
        </TableStackWrapper>
      </div>
    </section>
  )
}

export default TableStack5

const TableStackWrapper = ({ title, children }) => {
  return (
    <div className='mx-auto mb-8 w-full max-w-[770px] rounded-lg border border-stroke bg-white'>
      <div className='w-full border-b border-stroke py-6 px-7'>
        <h3 className='text-2xl font-semibold text-black'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}

const StackItem = ({ shortName, name, position, id, nameBg }) => {
  return (
    <div className='flex items-center border-b border-stroke py-6 px-7 hover:bg-primary/5'>
      <Checkbox id={id} />
      <div className='flex w-full items-center'>
        <div
          className={`mr-[14px] flex h-11 w-full max-w-[44px] items-center justify-center rounded-full text-base font-medium uppercase text-white bg-${nameBg}`}
        >
          {shortName}
        </div>
        <div className='w-full sm:flex'>
          <h4 className='text-base font-medium text-black sm:min-w-[220px]'>
            {name}
          </h4>
          <p className='text-base text-body-color'>{position}</p>
        </div>
      </div>
      <span className='hidden bg-[#094285]'></span>
      <span className='hidden bg-[#4926BD]'></span>
    </div>
  )
}

const Checkbox = ({ id }) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className='mr-6'>
      <input
        type='checkbox'
        name={id}
        id={id}
        className='sr-only'
        onChange={() => {
          setIsChecked(!isChecked)
        }}
      />
      <label
        htmlFor={id}
        className={`flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded border ${
          isChecked ? 'border-primary bg-primary' : 'border-stroke'
        }`}
      >
        <span className={`icon ${isChecked ? '' : 'opacity-0'}`}>
          <svg
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M12.0791 3.08687C12.307 3.31468 12.307 3.68402 12.0791 3.91183L5.66248 10.3285C5.43467 10.5563 5.06533 10.5563 4.83752 10.3285L1.92085 7.41183C1.69305 7.18402 1.69305 6.81468 1.92085 6.58687C2.14866 6.35906 2.51801 6.35906 2.74581 6.58687L5.25 9.09106L11.2542 3.08687C11.482 2.85906 11.8513 2.85906 12.0791 3.08687Z'
              fill='white'
            />
          </svg>
        </span>
      </label>
    </div>
  )
}