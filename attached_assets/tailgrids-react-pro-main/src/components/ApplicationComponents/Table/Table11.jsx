import React, { useEffect, useRef, useState } from 'react'

const tableData = [
  {
    id: '155',
    name: 'Andrio Maksim',
    position: 'Designer',
    duration: '3 years',
    birthDate: '25 Nov, 1989',
    email: 'maksim45@gmail.com',
    phone: '+323(29)-232-44-44',
    address: 'Block A, Demo Park',
    status: 'Full-time',
  },
  {
    id: '155',
    name: 'Andrio Maksim',
    position: 'Designer',
    duration: '3 years',
    birthDate: '25 Nov, 1989',
    email: 'maksim45@gmail.com',
    phone: '+323(29)-232-44-44',
    address: 'Block A, Demo Park',
    status: 'Full-time',
  },
  {
    id: '155',
    name: 'Andrio Maksim',
    position: 'Designer',
    duration: '3 years',
    birthDate: '25 Nov, 1989',
    email: 'maksim45@gmail.com',
    phone: '+323(29)-232-44-44',
    address: 'Block A, Demo Park',
    status: 'Full-time',
  },
  {
    id: '155',
    name: 'Andrio Maksim',
    position: 'Designer',
    duration: '3 years',
    birthDate: '25 Nov, 1989',
    email: 'maksim45@gmail.com',
    phone: '+323(29)-232-44-44',
    address: 'Block A, Demo Park',
    status: 'Full-time',
  },
]

const headers = [
  { name: '', styles: 'align-top', inputType: 'text', searchIcon: true },
  {
    name: 'Name/ID',
    styles: 'min-w-[160px]',
    inputType: 'text',
    searchIcon: true,
  },
  {
    name: 'Position',
    styles: 'min-w-[130px]',
    inputType: 'text',
    arrowIcon: true,
  },
  {
    name: 'BDay',
    styles: 'min-w-[170px]',
    inputType: 'date',
    calendarIcon: true,
  },
  {
    name: 'Email/Phone',
    styles: 'min-w-[220px]',
    inputType: 'text',
    searchIcon: true,
  },
  {
    name: 'Address',
    styles: 'min-w-[220px]',
    inputType: 'text',
    arrowIcon: true,
  },
  {
    name: 'Status',
    styles: 'min-w-[120px]',
    inputType: 'text',
    arrowIcon: true,
  },
  { name: '', styles: 'min-w-[100px]' },
]

const Table11 = () => {
  return (
    <section className='bg-gray-2 dark:bg-dark py-20 lg:py-[120px]'>
      <div className='mx-auto px-4 lg:container'>
        <div className='bg-white rounded-lg dark:bg-dark-2 shadow-card'>
          <TableTop />
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

export default Table11;

const TableTop = () => {
  return (
    <div className='items-center justify-between space-y-4 border-b border-stroke dark:border-dark-3 py-[18px] px-5 sm:flex sm:space-x-4 sm:space-y-0'>
      <div className='w-full md:max-w-[420px]'>
        <div className='relative overflow-hidden rounded-sm'>
          <input
            type='text'
            placeholder='Search here...'
            className='h-[46px] w-full rounded-md dark:border-dark-3 border bg-transparent dark:text-dark-6 placeholder:opacity-60 border-stroke pl-5 pr-14 text-base text-body-color outline-hidden focus:border-primary'
          />
          <button className='absolute top-0 right-0 flex h-full w-[46px] items-center justify-center bg-primary text-white'>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2687 15.6657L12.6281 11.897C14.5406 9.28135 14.3437 5.54072 11.9531 3.17822C10.6875 1.9126 8.99995 1.20947 7.19995 1.20947C5.39995 1.20947 3.71245 1.9126 2.44683 3.17822C-0.168799 5.79385 -0.168799 10.0688 2.44683 12.6845C3.71245 13.9501 5.39995 14.6532 7.19995 14.6532C8.91558 14.6532 10.5187 14.0063 11.7843 12.8532L16.4812 16.6501C16.5937 16.7345 16.7343 16.7907 16.875 16.7907C17.0718 16.7907 17.2406 16.7063 17.3531 16.5657C17.5781 16.2845 17.55 15.8907 17.2687 15.6657ZM7.19995 13.3876C5.73745 13.3876 4.38745 12.8251 3.34683 11.7845C1.20933 9.64697 1.20933 6.1876 3.34683 4.07822C4.38745 3.0376 5.73745 2.4751 7.19995 2.4751C8.66245 2.4751 10.0125 3.0376 11.0531 4.07822C13.1906 6.21572 13.1906 9.6751 11.0531 11.7845C10.0406 12.8251 8.66245 13.3876 7.19995 13.3876Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <button className='flex h-[46px] items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 text-base font-medium text-white hover:bg-primary/90'>
          <span className='mr-2'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1487_3014)">
                <path
                  d="M13.1875 9.28125H10.6875V6.8125C10.6875 6.4375 10.375 6.125 9.96875 6.125C9.59375 6.125 9.28125 6.4375 9.28125 6.84375V9.3125H6.8125C6.4375 9.3125 6.125 9.625 6.125 10.0312C6.125 10.4062 6.4375 10.7187 6.84375 10.7187H9.3125V13.1875C9.3125 13.5625 9.625 13.875 10.0312 13.875C10.4062 13.875 10.7187 13.5625 10.7187 13.1562V10.6875H13.1875C13.5625 10.6875 13.875 10.375 13.875 9.96875C13.875 9.59375 13.5625 9.28125 13.1875 9.28125Z"
                  fill="currentColor"
                />
                <path
                  d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.8125 19.4688 10.0312 19.4688C15.25 19.4688 19.5 15.2188 19.5 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.5625 18.0625 10C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_1487_3014">
                  <rect width={20} height={20} fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Add Employee
        </button>
      </div>
    </div>
  )
}

const TableHead = ({ headers }) => {
  const checkboxId = 'checkboxId'

  return (
    <thead>
      <tr className='border-b border-stroke dark:border-dark-3'>
        {headers.map((header, index) => (
          <th
            className={`px-4 pt-9 pb-6 first:pl-8 align-top ${header.styles}`}
            key={index}
          >
            {index === 0 && <Checkbox index={checkboxId} />}
            {index !== 0 && index !== headers.length - 1 && (
              <div>
                <div className='mb-[10px] flex items-center'>
                  <p className='mr-1 text-base font-medium text-body-color dark:text-dark-6'>
                    {header.name}
                  </p>
                  <div className='inline-flex flex-col space-y-[2px] text-body-color dark:text-dark-6'>
                    <span className='inline-block'>
                      <svg
                        width='10'
                        height='5'
                        viewBox='0 0 10 5'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M5 0L0 5H10L5 0Z' fill='currentColor' />
                      </svg>
                    </span>
                    <span className='inline-block'>
                      <svg
                        width='10'
                        height='5'
                        viewBox='0 0 10 5'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z'
                          fill='currentColor'
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className='relative'>
                  <input
                    type={header.inputType}
                    className='h-[34px] w-full rounded-sm border border-stroke pr-3 pl-8 text-sm text-body-color outline-hidden dark:border-dark-3 dark:text-dark-6 bg-transparent'
                  />
                  {header.searchIcon && (
                    <span className='absolute -translate-y-1/2 top-1/2 left-3 text-body-color dark:text-dark-6'>
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.41699 2.33268C4.16183 2.33268 2.33366 4.16085 2.33366 6.41601C2.33366 8.67118 4.16183 10.4993 6.41699 10.4993C8.67215 10.4993 10.5003 8.67118 10.5003 6.41601C10.5003 4.16085 8.67215 2.33268 6.41699 2.33268ZM1.16699 6.41601C1.16699 3.51652 3.5175 1.16602 6.41699 1.16602C9.31649 1.16602 11.667 3.51652 11.667 6.41601C11.667 9.31551 9.31649 11.666 6.41699 11.666C3.5175 11.666 1.16699 9.31551 1.16699 6.41601Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.29976 9.29976C9.52757 9.07195 9.89691 9.07195 10.1247 9.29976L12.6622 11.8373C12.89 12.0651 12.89 12.4344 12.6622 12.6622C12.4344 12.89 12.0651 12.89 11.8373 12.6622L9.29976 10.1247C9.07195 9.89691 9.07195 9.52757 9.29976 9.29976Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  )}
                  {header.arrowIcon && (
                    <span className='absolute -translate-y-1/2 text-body-color dark:text-dark-6 right-3 top-1/2'>
                      <svg
                        width={10}
                        height={5}
                        viewBox="0 0 10 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z" fill="currentColor" />
                      </svg>
                    </span>
                  )}
                  {header.calendarIcon && (
                    <span className='absolute -translate-y-1/2 text-body-color dark:text-dark-6 top-1/2 left-3'>
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.66699 0.583984C4.98916 0.583984 5.25033 0.845152 5.25033 1.16732V1.75065H8.75033V1.16732C8.75033 0.845152 9.01149 0.583984 9.33366 0.583984C9.65582 0.583984 9.91699 0.845152 9.91699 1.16732V1.75065H11.0837C12.0502 1.75065 12.8337 2.53415 12.8337 3.50065V11.6673C12.8337 12.6338 12.0502 13.4173 11.0837 13.4173H2.91699C1.95049 13.4173 1.16699 12.6338 1.16699 11.6673V3.50065C1.16699 2.53415 1.95049 1.75065 2.91699 1.75065H4.08366V1.16732C4.08366 0.845152 4.34483 0.583984 4.66699 0.583984ZM4.08366 2.91732H2.91699C2.59483 2.91732 2.33366 3.17848 2.33366 3.50065V5.25065H11.667V3.50065C11.667 3.17848 11.4058 2.91732 11.0837 2.91732H9.91699V3.50065C9.91699 3.82282 9.65582 4.08398 9.33366 4.08398C9.01149 4.08398 8.75033 3.82282 8.75033 3.50065V2.91732H5.25033V3.50065C5.25033 3.82282 4.98916 4.08398 4.66699 4.08398C4.34483 4.08398 4.08366 3.82282 4.08366 3.50065V2.91732ZM11.667 6.41732H2.33366V11.6673C2.33366 11.9895 2.59483 12.2507 2.91699 12.2507H11.0837C11.4058 12.2507 11.667 11.9895 11.667 11.6673V6.41732Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </div>
            )}
            {index === headers.length - 1 && null}
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
        <tr
          className='border-b border-stroke dark:border-dark-3 hover:bg-primary/5'
          key={index}
        >
          <td className='py-5 pl-8'>
            <Checkbox index={index} />
          </td>
          <td className='py-5 px-4'>
            <p className='text-base font-medium text-primary'>{row.name}</p>
            <p className='text-base text-body-color dark:text-dark-6'>{row.id}</p>
          </td>
          <td className='py-5 px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.position}</p>
            <p className='text-base text-body-color dark:text-dark-6'>{row.duration}</p>
          </td>
          <td className='py-5 px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.birthDate}</p>
          </td>
          <td className='py-5 px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.email}</p>
            <p className='text-base text-body-color dark:text-dark-6'>{row.phone}</p>
          </td>
          <td className='py-5 px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.address}</p>
          </td>
          <td className='py-5 px-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.status}</p>
          </td>
          <td className='py-5 pl-4 pr-8'>
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 top-full z-40 w-[200px] space-y-1 rounded bg-white p-2 shadow-card dark:bg-dark border-stroke dark:border-dark-3 border ${
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
    <div className='relative mt-1'>
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
        className={`flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded border ${
          isChecked ? 'bg-primary! border-primary' : 'border-stroke dark:border-dark-4'
        }`}
      >
        <span className={`icon ${isChecked ? '' : 'opacity-0'} text-white`}>
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
              fill='currentColor'
            />
          </svg>
        </span>
      </label>
    </div>
  )
}
