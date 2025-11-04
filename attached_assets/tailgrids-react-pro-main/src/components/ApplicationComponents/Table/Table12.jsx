import React, { useState, useRef, useEffect } from 'react'

const tableData = [
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/table-12/image-01.jpg',
    imageAlt: 'product',
    name: 'Apple Watch Series 7',
    category: 'Electronics',
    price: '$269',
    sold: '22',
    profit: '$45',
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/table-12/image-02.jpg',
    imageAlt: 'product',
    name: 'Macbook Pro M1',
    category: 'Electronics',
    price: '$546',
    sold: '34',
    profit: '$125',
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/table-12/image-03.jpg',
    imageAlt: 'product',
    name: 'Dell Inspiron 15',
    category: 'Electronics',
    price: '$444',
    sold: '64',
    profit: '$247',
  },
  {
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/table-12/image-04.jpg',
    imageAlt: 'product',
    name: 'HP Probook 450',
    category: 'Electronics',
    price: '$499',
    sold: '72',
    profit: '$103',
  },
]

const headers = [
  {
    name: 'Product Name',
    styles: 'min-w-[300px]',
  },
  {
    name: 'Category',
    styles: 'min-w-[90px]',
  },
  {
    name: 'Price',
    styles: 'min-w-[90px]',
  },
  {
    name: 'Sold',
    styles: 'min-w-[90px]',
  },
  {
    name: 'Profit',
    styles: 'min-w-[90px]',
  },
]


const Table12 = () => {
  return (
    <section className='bg-gray-2 dark:bg-dark py-20 lg:py-[120px]'>
      <div className='mx-auto px-4 lg:container'>
        <div className='mx-auto w-full max-w-[850px] rounded-lg border border-stroke bg-white dark:bg-dark-2 dark:border-dark-3'>
          <div className='max-w-full overflow-x-auto'>
            <table className='w-full table-auto'>
              <TableHead headers={headers} />
              <TableBody data={tableData} />
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Table12;

const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr className='border-b border-stroke dark:border-dark-3'>
        {headers.map((header, index) => (
          <th
            className={`py-5 px-4 first:pl-8 last:pr-8 ${header.styles}`}
            key={index}
          >
            <p className='text-base font-medium text-left text-dark dark:text-white'>
              {header.name}
            </p>
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
        <tr className='border-b border-stroke dark:border-dark-3 last-of-type:border-none' key={index}>
          <td className='py-[18px] pl-6 pr-3'>
            <div className='flex items-center'>
              <Checkbox index={index} />
              <div className='flex items-center'>
                <img
                  src={row.image}
                  alt={row.imageAlt}
                  className='mr-4 h-[50px] w-[60px] rounded-sm object-cover object-center'
                />
                <p className='text-base text-body-color dark:text-dark-6'>{row.name}</p>
              </div>
            </div>
          </td>
          <td className='py-[18px] px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.category}</p>
          </td>
          <td className='py-[18px] px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.price}</p>
          </td>
          <td className='py-[18px] px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.sold}</p>
          </td>
          <td className='py-[18px] px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.profit}</p>
          </td>
          <td className='py-[18px] pl-4 pr-6'>
            <Dropdown />
          </td>
        </tr>
      ))}
    </tbody>
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
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className='text-body-color dark:text-dark-6'
      >
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark border border-stroke dark:border-dark-3 ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <button className='w-full px-3 py-2 text-sm text-left rounded-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2'>
          Edit
        </button>
        <button className='w-full px-3 py-2 text-sm text-left rounded-sm text-body-color hover:bg-gray-2 dark:text-dark-6 dark:hover:bg-dark-2'>
          Delete
        </button>
      </div>
    </div>
  )
}

const Checkbox = ({ index }) => {
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
          className={`icon-box mr-5 flex h-5 w-5 items-center justify-center rounded-[3px] border-[.5px] text-white ${
            isChecked ? 'bg-primary! border-primary' : 'border-stroke bg-transparent dark:border-dark-3'
          }`}
        >
          <svg
            width='14'
            height='14'
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
      </label>
    </div>
  )
}
