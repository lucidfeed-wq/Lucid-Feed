import React, { useState, useEffect, useRef } from 'react'

const TableStack = () => {
  return (
    <section className='relative z-10 overflow-hidden bg-white py-20 lg:py-[100px]'>
      <div className='container mx-auto'>
        <TableStackWrapper title='Users List'>
          <StackItem
            img='https://cdn.tailgrids.com/2.0/image/dashboard/images/users-list/image-01.png'
            name='Devid Wilium'
            position='Digital marketer'
          />
          <StackItem
            img='https://cdn.tailgrids.com/2.0/image/dashboard/images/users-list/image-02.png'
            name='Deniyal Shifer'
            position='Graphics designe'
          />
          <StackItem
            img='https://cdn.tailgrids.com/2.0/image/dashboard/images/users-list/image-03.png'
            name='Philifs Geno'
            position='Content creator'
          />
          <StackItem
            img='https://cdn.tailgrids.com/2.0/image/dashboard/images/users-list/image-04.png'
            name='Marko Diyan'
            position='Web developer'
          />
        </TableStackWrapper>
      </div>
    </section>
  )
}

export default TableStack

const TableStackWrapper = ({ title, children }) => {
  return (
    <>
      <h3 className='mb-8 text-2xl font-medium text-black sm:text-[28px]'>
        {title}
      </h3>
      <div className='border-stroke max-w-[370px] border bg-white py-[10px]'>
        {children}
      </div>
    </>
  )
}

const StackItem = ({ img, name, position }) => {
  return (
    <div className='flex items-center justify-between py-[18px] pl-6 pr-4 hover:bg-[#F5F5F5]'>
      <div className='flex items-center'>
        <div className='mr-[18px] h-[50px] w-full max-w-[50px] overflow-hidden rounded-full'>
          <img
            src={img}
            alt='user'
            className='rounded-full object-cover object-center'
          />
        </div>
        <div>
          <h4 className='text-base font-medium text-black'>{name}</h4>
          <p className='text-body-color text-base'>{position}</p>
        </div>
      </div>
      <div>
        <Dropdown />
      </div>
    </div>
  )
}

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef(null)
  const dropdown = useRef(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className='relative'>
      <button
        className='text-body-color'
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z'
            fill='#637381'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5Z'
            fill='#637381'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19Z'
            fill='#637381'
          />
        </svg>
      </button>
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`shadow-card absolute right-0 top-full z-40 w-[150px] space-y-1 rounded bg-white p-2 ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <button className='text-body-color hover:bg-gray-2 w-full rounded-sm py-1.5 px-3 text-left text-sm'>
          Edit
        </button>
        <button className='text-body-color hover:bg-gray-2 w-full rounded-sm py-1.5 px-3 text-left text-sm'>
          Delete
        </button>
      </div>
    </div>
  )
}
