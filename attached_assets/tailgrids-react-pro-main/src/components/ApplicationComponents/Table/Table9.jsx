import React, { useState, useRef, useEffect } from 'react'

const tableData = [
  {
    title: 'NR',
    titleColor: 'bg-[#00BFD9]',
    name: 'Naimur Rahman',
    type: 'Annual Leave',
    period: '25 Dec 2024 - 28 Dec 2024',
    duration: '3 Days',
    status: true,
  },
  {
    title: 'MC',
    titleColor: 'bg-[#FFB52B]',
    name: 'Musharof Chowdhury',
    type: 'Annual Leave',
    period: '25 Dec 2024 - 28 Dec 2024',
    duration: '3 Days',
    status: false,
  },
  {
    title: 'SH',
    titleColor: 'bg-[#4926BD]',
    name: 'Shafiq Hammad',
    type: 'Annual Leave',
    period: '25 Dec 2024 - 28 Dec 2024',
    duration: '3 Days',
    status: true,
  },
  {
    title: 'AS',
    titleColor: 'bg-[#132D4A]',
    name: 'Alex Semuyel',
    type: 'Annual Leave',
    period: '25 Dec 2024 - 28 Dec 2024',
    duration: '3 Days',
    status: false,
  },
  {
    title: 'NR',
    titleColor: 'bg-[#00BFD9]',
    name: 'Naimur Rahman',
    type: 'Annual Leave',
    period: '25 Dec 2024 - 28 Dec 2024',
    duration: '3 Days',
    status: true,
  },
]

const headers = [
  { name: 'Name', styles: 'min-w-[260px] text-left' },
  { name: 'Type', styles: 'min-w-[150px] text-left' },
  { name: 'Period', styles: 'min-w-[250px] text-left' },
  { name: 'Duration', styles: 'min-w-[130px] text-left' },
  { name: 'Status', styles: 'min-w-[150px] text-left' },
  { name: 'Actions', styles: 'min-w-[150px] text-right' },
]

const Table9 = () => {
  return (
    <section className='bg-gray-2 dark:bg-dark py-20 lg:py-[120px]'>
      <div className='mx-auto px-4 lg:container'>
        <div className='bg-white rounded-lg dark:bg-dark-2 shadow-card'>
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

export default Table9;

const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr className='bg-[#F6F8FB] dark:bg-dark-3'>
        {headers.map((header, index) => (
          <th
            className={`py-6 px-4 first:pl-10 last:pr-10 last:text-right ${header.styles}`}
            key={index}
          >
            <p className='text-base font-medium text-body-color dark:text-dark-7'>
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
        <tr className='border-b border-stroke dark:border-dark-3' key={index}>
          <td className='py-5 pl-10 pr-3'>
            <div className='flex items-center space-x-4'>
              <div
                className={`flex h-11 w-full max-w-[44px] items-center justify-center rounded-full text-base font-medium text-white ${row.titleColor}`}
              >
                {row.title}
              </div>

              <p className='text-base text-body-color dark:text-dark-6'>{row.name}</p>
            </div>
          </td>
          <td className='py-5 px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.type}</p>
          </td>
          <td className='py-5 px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.period}</p>
          </td>
          <td className='py-5 px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.duration}</p>
          </td>
          <td className='py-5 px-4'>
            {row.status ? (
              <span className='inline-flex items-center justify-center h-8 px-5 text-base text-white rounded-sm bg-green'>
                Approved
              </span>
            ) : (
              <span className='inline-flex h-8 items-center justify-center rounded-sm bg-[#F13426] px-5 text-base text-white'>
                Declined
              </span>
            )}
          </td>
          <td className='py-5 pl-4 pr-10 text-right'>
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
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z'
            stroke='#637381'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12Z'
            stroke='#637381'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z'
            stroke='#637381'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded dark:bg-dark dark:border-dark-3 border-stroke border bg-white p-2 dark:shadow-card ${
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
