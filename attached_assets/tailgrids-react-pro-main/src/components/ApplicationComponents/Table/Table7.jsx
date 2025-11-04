import React, { useState } from 'react'

const tableData = [
  {
    options: 'HTML',
    products: 'Startup Template',
    quantity: '1',
    price: '$19',
    popularity: 'w-[40%]',
  },
  {
    options: 'React',
    products: 'eCommerce Template',
    quantity: '3',
    price: '$99',
    popularity: 'w-[45%]',
  },
  {
    options: 'Bootstrap',
    products: 'Corporate Template',
    quantity: '4',
    price: '$42',
    popularity: 'w-[49%]',
  },
  {
    options: 'Tailwind CSS',
    products: 'SaaS Template',
    quantity: '2',
    price: '$19',
    popularity: 'w-[60%]',
  },
  {
    options: 'Angular',
    products: 'Business Template',
    quantity: '1',
    price: '$19',
    popularity: 'w-[70%]',
  },
]

const headers = [
  { name: 'Options', styles: 'min-w-[250px]', icon: true },
  { name: 'Products', styles: 'min-w-[250px]', icon: true },
  { name: 'Quantity', styles: 'min-w-[150px]', icon: false },
  { name: 'Price', styles: 'min-w-[120px] justify-end!', icon: false },
  { name: 'Popularity', styles: 'min-w-[300px]', icon: true },
]

const Table7 = () => {
  return (
    <section className='bg-gray-2 dark:bg-dark py-20 lg:py-[120px]'>
      <div className='mx-auto px-4 md:container'>
        <TableTop />
        <div className='bg-white border rounded-md dark:bg-dark-2 dark:border-dark-3 border-stroke'>
          <div className='max-w-full overflow-x-auto'>
            <table className='w-full table-auto'>
              <TableHead headers={headers} />
              <TableBody data={tableData} />
            </table>
          </div>
          <TableBottom
            totalPrice='409'
            buttonCancel='Cancel Order'
            buttonComplete='Complete Order'
          />
        </div>
      </div>
    </section>
  )
}

export default Table7;

const TableTop = () => {
  return (
    <div className='flex items-center px-6 py-3 mb-5 bg-white border rounded-md dark:bg-dark-2 dark:border-dark-3 border-stroke'>
      <div className='relative inline-block'>
        <select
          name=''
          id=''
          className='pr-12 text-base bg-transparent border-r outline-hidden appearance-none dark:text-dark-6 border-stroke dark:border-dark-3 text-body-color'
        >
          <option value='All Category'>All Category</option>
          <option value='Bootstrap'>Bootstrap</option>
        </select>
        <span className='absolute right-4 top-1/2 -translate-y-1/2'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M3.96967 6.21967C4.26256 5.92678 4.73744 5.92678 5.03033 6.21967L9 10.1893L12.9697 6.21967C13.2626 5.92678 13.7374 5.92678 14.0303 6.21967C14.3232 6.51256 14.3232 6.98744 14.0303 7.28033L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803L3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967Z'
              fill='#637381'
            />
          </svg>
        </span>
      </div>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search here ...'
          className='block w-full text-base bg-transparent outline-hidden dark:text-dark-6 pl-11 text-body-color'
        />
        <span className='absolute left-4 top-1/2 -translate-y-1/2'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z'
              fill='#637381'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M11.9572 11.9572C12.2501 11.6643 12.7249 11.6643 13.0178 11.9572L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5126 16.5732 15.2197 16.2803L11.9572 13.0178C11.6643 12.7249 11.6643 12.2501 11.9572 11.9572Z'
              fill='#637381'
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th
            className='px-5 py-3 border border-stroke border-t-transparent! border-l-transparent! dark:border-dark-3'
            key={index}
          >
            <div
              className={`flex items-center justify-between ${header.styles}`}
            >
              <span className='text-sm dark:text-dark-6 text-body-color'>
                {header.name}
              </span>
              {header.icon && <IconOption />}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td className='px-5 py-3 border border-stroke border-l-transparent! dark:border-dark-3'>
            <Checkbox index={index} options={row.options} />
          </td>
          <td className='px-5 py-3 border border-stroke dark:border-dark-3'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.products}</p>
          </td>
          <td className='px-5 py-3 border border-stroke dark:border-dark-3'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.quantity}</p>
          </td>
          <td className='px-5 py-3 border border-stroke dark:border-dark-3'>
            <p className='text-base text-right text-body-color dark:text-dark-6'>{row.price}</p>
          </td>
          <td className='px-5 py-3 border border-stroke border-r-transparent! dark:border-dark-3'>
            <div className='flex items-center justify-between'>
              <div className='relative mr-8 block h-[5px] w-full max-w-[280px] rounded-sm bg-stroke dark:bg-dark-4'>
                <div
                  className={`absolute top-0 left-0 block h-full rounded-sm bg-primary ${row.popularity}`}
                ></div>
              </div>
              <div className='flex items-center justify-end space-x-3'>
                <button className='group text-body-color hover:text-yellow-dark'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M3.25278 1.91977C3.62785 1.5447 4.13656 1.33398 4.66699 1.33398H11.3337C11.8641 1.33398 12.3728 1.5447 12.7479 1.91977C13.1229 2.29484 13.3337 2.80355 13.3337 3.33398V14.0007C13.3337 14.2504 13.1941 14.4792 12.972 14.5934C12.75 14.7077 12.4827 14.6883 12.2795 14.5431L8.00032 11.4866L3.72115 14.5431C3.51794 14.6883 3.25065 14.7077 3.0286 14.5934C2.80656 14.4792 2.66699 14.2504 2.66699 14.0007V3.33398C2.66699 2.80355 2.87771 2.29484 3.25278 1.91977Z'
                      strokeWidth='1'
                      className='fill-transparent stroke-current group-hover:fill-current'
                    />
                  </svg>
                </button>
                <button className='hover:text-red-dark text-body-color'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M1.33301 4.00065C1.33301 3.63246 1.63148 3.33398 1.99967 3.33398H13.9997C14.3679 3.33398 14.6663 3.63246 14.6663 4.00065C14.6663 4.36884 14.3679 4.66732 13.9997 4.66732H1.99967C1.63148 4.66732 1.33301 4.36884 1.33301 4.00065Z'
                      fill='currentColor'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M6.66699 1.99935C6.49018 1.99935 6.32061 2.06959 6.19559 2.19461C6.07056 2.31964 6.00032 2.4892 6.00032 2.66602V3.33268H10.0003V2.66602C10.0003 2.4892 9.93009 2.31964 9.80506 2.19461C9.68004 2.06959 9.51047 1.99935 9.33366 1.99935H6.66699ZM11.3337 3.33268V2.66602C11.3337 2.13558 11.1229 1.62687 10.7479 1.2518C10.3728 0.876729 9.86409 0.666016 9.33366 0.666016H6.66699C6.13656 0.666016 5.62785 0.876729 5.25278 1.2518C4.87771 1.62687 4.66699 2.13558 4.66699 2.66602V3.33268H3.33366C2.96547 3.33268 2.66699 3.63116 2.66699 3.99935V13.3327C2.66699 13.8631 2.87771 14.3718 3.25278 14.7469C3.62785 15.122 4.13656 15.3327 4.66699 15.3327H11.3337C11.8641 15.3327 12.3728 15.122 12.7479 14.7469C13.1229 14.3718 13.3337 13.8631 13.3337 13.3327V3.99935C13.3337 3.63116 13.0352 3.33268 12.667 3.33268H11.3337ZM4.00033 4.66602V13.3327C4.00033 13.5095 4.07056 13.6791 4.19559 13.8041C4.32061 13.9291 4.49018 13.9993 4.66699 13.9993H11.3337C11.5105 13.9993 11.68 13.9291 11.8051 13.8041C11.9301 13.6791 12.0003 13.5095 12.0003 13.3327V4.66602H4.00033Z'
                      fill='currentColor'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M6.66667 6.66602C7.03486 6.66602 7.33333 6.96449 7.33333 7.33268V11.3327C7.33333 11.7009 7.03486 11.9994 6.66667 11.9994C6.29848 11.9994 6 11.7009 6 11.3327V7.33268C6 6.96449 6.29848 6.66602 6.66667 6.66602Z'
                      fill='currentColor'
                    />
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M9.33366 6.66602C9.70185 6.66602 10.0003 6.96449 10.0003 7.33268V11.3327C10.0003 11.7009 9.70185 11.9994 9.33366 11.9994C8.96547 11.9994 8.66699 11.7009 8.66699 11.3327V7.33268C8.66699 6.96449 8.96547 6.66602 9.33366 6.66602Z'
                      fill='currentColor'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

const TableBottom = ({ totalPrice, buttonCancel, buttonComplete }) => {
  return (
    <div className='items-center justify-between p-5 sm:flex sm:px-6'>
      <p className='mb-4 text-base font-medium text-right text-body-color dark:text-dark-6 sm:mb-0 sm:text-left md:text-lg'>
        Total Payable : {totalPrice}
      </p>
      <div className='flex items-center justify-end'>
        <button className='mr-3 py-[10px] text-base font-medium text-body-color dark:text-dark-6 hover:text-primary sm:mr-5'>
          {buttonCancel}
        </button>
        <button className='py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary hover:bg-primary/90 px-7 sm:text-base'>
          {buttonComplete}
        </button>
      </div>
    </div>
  )
}

const IconOption = () => {
  return (
    <span className='cursor-pointer'>
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
          d='M4.08301 3.49935C4.08301 3.17718 4.34418 2.91602 4.66634 2.91602H12.2497C12.5718 2.91602 12.833 3.17718 12.833 3.49935C12.833 3.82152 12.5718 4.08268 12.2497 4.08268H4.66634C4.34418 4.08268 4.08301 3.82152 4.08301 3.49935Z'
          fill='#637381'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4.08301 6.99935C4.08301 6.67718 4.34418 6.41602 4.66634 6.41602H12.2497C12.5718 6.41602 12.833 6.67718 12.833 6.99935C12.833 7.32151 12.5718 7.58268 12.2497 7.58268H4.66634C4.34418 7.58268 4.08301 7.32151 4.08301 6.99935Z'
          fill='#637381'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M4.08301 10.4993C4.08301 10.1772 4.34418 9.91602 4.66634 9.91602H12.2497C12.5718 9.91602 12.833 10.1772 12.833 10.4993C12.833 10.8215 12.5718 11.0827 12.2497 11.0827H4.66634C4.34418 11.0827 4.08301 10.8215 4.08301 10.4993Z'
          fill='#637381'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.16699 3.49935C1.16699 3.17718 1.42816 2.91602 1.75033 2.91602H1.75616C2.07832 2.91602 2.33949 3.17718 2.33949 3.49935C2.33949 3.82152 2.07832 4.08268 1.75616 4.08268H1.75033C1.42816 4.08268 1.16699 3.82152 1.16699 3.49935Z'
          fill='#637381'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.16699 6.99935C1.16699 6.67718 1.42816 6.41602 1.75033 6.41602H1.75616C2.07832 6.41602 2.33949 6.67718 2.33949 6.99935C2.33949 7.32151 2.07832 7.58268 1.75616 7.58268H1.75033C1.42816 7.58268 1.16699 7.32151 1.16699 6.99935Z'
          fill='#637381'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1.16699 10.4993C1.16699 10.1772 1.42816 9.91602 1.75033 9.91602H1.75616C2.07832 9.91602 2.33949 10.1772 2.33949 10.4993C2.33949 10.8215 2.07832 11.0827 1.75616 11.0827H1.75033C1.42816 11.0827 1.16699 10.8215 1.16699 10.4993Z'
          fill='#637381'
        />
      </svg>
    </span>
  )
}

const Checkbox = ({ name, index }) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className='relative'>
      <input
        type='checkbox'
        name='tableCheckbox'
        id={index}
        className='tableCheckbox sr-only'
        onChange={() => {
          setIsChecked(!isChecked)
        }}
      />
      <label
        htmlFor={index}
        className='flex items-center text-base cursor-pointer text-body-color dark:text-dark-6'
      >
        <span
          className={`icon-box mr-3 flex h-4 w-4 items-center justify-center rounded-[3px] border-[.5px] text-white ${
            isChecked ? 'bg-primary! border-primary' : 'bg-gray-2 border-stroke dark:border-dark-3 dark:bg-dark'
          }`}
        >
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            className={`icon ${isChecked ? '' : 'opacity-0'}`}
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M8.62796 2.20602C8.79068 2.36874 8.79068 2.63256 8.62796 2.79528L4.04463 7.37861C3.88191 7.54133 3.61809 7.54133 3.45537 7.37861L1.37204 5.29528C1.20932 5.13256 1.20932 4.86874 1.37204 4.70602C1.53476 4.5433 1.79858 4.5433 1.96129 4.70602L3.75 6.49473L8.03871 2.20602C8.20142 2.0433 8.46524 2.0433 8.62796 2.20602Z'
              fill='currentColor'
            />
          </svg>
        </span>
        {name}
      </label>
    </div>
  )
}
