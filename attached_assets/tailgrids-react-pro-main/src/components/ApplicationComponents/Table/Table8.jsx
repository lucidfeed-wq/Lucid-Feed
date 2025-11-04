import React, { useState } from 'react'

const tableData = [
  {
    name: 'Musharof Chowdhury',
    subject: 'Some note & Lorem Ipsum available alteration in some form.',
    date: '17 Oct, 2024',
  },
  {
    name: 'Naimur Rahman',
    subject: 'Lorem Ipsum available alteration in some form.',
    date: '25 Nov, 2024',
  },
  {
    name: 'Shafiq Hammad',
    subject: 'Lorem Ipsum available alteration in some form.',
    date: '25 Nov, 2024',
  },
  {
    name: 'Alex Semuyel',
    subject: 'Lorem Ipsum available alteration in some form.',
    date: '19 Dec, 2024',
  },
]

const headers = [
  { name: 'Senders', styles: 'min-w-[300px]', checkbox: true },
  { name: 'Subject', styles: 'min-w-[300px]', checkbox: false },
  { name: 'Date', styles: 'min-w-[170px] text-right', checkbox: false },
]

const Table8 = () => {
  return (
    <section className='bg-gray-2 dark:bg-dark py-20 lg:py-[120px]'>
      <div className='mx-auto px-4 md:container'>
        <TableTop />
        <div className='bg-white border rounded-md border-stroke dark:bg-dark-2 dark:border-dark-3'>
          <div className='max-w-full overflow-x-auto'>
            <table className='w-full table-auto'>
              <TableHead headers={headers} />
              <TableBody data={tableData} />
            </table>
          </div>
          <TableBottom pagination='1-5 of 29' />
        </div>
      </div>
    </section>
  )
}

export default Table8;

const TableTop = () => {
  return (
    <div className='px-6 py-4 mb-5 bg-white rounded-md dark:bg-dark-2 shadow-2'>
      <div className='relative'>
        <input
          type='text'
          placeholder='Search for user, email address...'
          className='block w-full text-base bg-transparent outline-hidden placeholder:opacity-60 px-7 text-body-color dark:text-dark-6'
        />
        <span className='absolute left-0 -translate-y-1/2 text-body-color dark:text-dark-6 top-1/2'>
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
        <button className='absolute right-0 -translate-y-1/2 text-body-color dark:text-dark-6 top-1/2'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_3018_1095)'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.25 3C8.25 3.41421 7.91421 3.75 7.5 3.75L2.25 3.75C1.83578 3.75 1.5 3.41421 1.5 3C1.5 2.58579 1.83578 2.25 2.25 2.25L7.5 2.25C7.91421 2.25 8.25 2.58579 8.25 3Z'
                fill='#637381'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.5 3C16.5 3.41421 16.1642 3.75 15.75 3.75L10.5 3.75C10.0858 3.75 9.75 3.41421 9.75 3C9.75 2.58579 10.0858 2.25 10.5 2.25L15.75 2.25C16.1642 2.25 16.5 2.58579 16.5 3Z'
                fill='#637381'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.75 9C9.75 9.41421 9.41421 9.75 9 9.75L2.25 9.75C1.83579 9.75 1.5 9.41421 1.5 9C1.5 8.58579 1.83579 8.25 2.25 8.25L9 8.25C9.41421 8.25 9.75 8.58579 9.75 9Z'
                fill='#637381'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.5 9C16.5 9.41421 16.1642 9.75 15.75 9.75L12 9.75C11.5858 9.75 11.25 9.41421 11.25 9C11.25 8.58579 11.5858 8.25 12 8.25L15.75 8.25C16.1642 8.25 16.5 8.58579 16.5 9Z'
                fill='#637381'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6.75 15C6.75 15.4142 6.41421 15.75 6 15.75L2.25 15.75C1.83578 15.75 1.5 15.4142 1.5 15C1.5 14.5858 1.83578 14.25 2.25 14.25L6 14.25C6.41421 14.25 6.75 14.5858 6.75 15Z'
                fill='#637381'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.5 15C16.5 15.4142 16.1642 15.75 15.75 15.75L9 15.75C8.58579 15.75 8.25 15.4142 8.25 15C8.25 14.5858 8.58579 14.25 9 14.25L15.75 14.25C16.1642 14.25 16.5 14.5858 16.5 15Z'
                fill='#637381'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.5 -3.27835e-08C7.91421 -1.46777e-08 8.25 0.335786 8.25 0.75L8.25 5.25C8.25 5.66421 7.91421 6 7.5 6C7.08579 6 6.75 5.66421 6.75 5.25L6.75 0.75C6.75 0.335786 7.08579 -5.08894e-08 7.5 -3.27835e-08Z'
                fill='#637381'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 6C12.4142 6 12.75 6.33579 12.75 6.75L12.75 11.25C12.75 11.6642 12.4142 12 12 12C11.5858 12 11.25 11.6642 11.25 11.25L11.25 6.75C11.25 6.33579 11.5858 6 12 6Z'
                fill='#637381'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 12C6.41421 12 6.75 12.3358 6.75 12.75L6.75 17.25C6.75 17.6642 6.41421 18 6 18C5.58579 18 5.25 17.6642 5.25 17.25L5.25 12.75C5.25 12.3358 5.58579 12 6 12Z'
                fill='#637381'
              />
            </g>
            <defs>
              <clipPath id='clip0_3018_1095'>
                <rect
                  width='18'
                  height='18'
                  fill='white'
                  transform='translate(18) rotate(90)'
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  )
}

const TableHead = ({ headers }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <thead>
      <tr className='border-b border-stroke dark:border-dark-3'>
        {headers.map((header, index) => (
          <th
            className={`py-6 px-4 first:pl-10 last:pr-10 ${header.styles}`}
            key={index}
          >
            {header.checkbox ? (
              <div className='relative'>
                <input
                  type='checkbox'
                  name='tableCheckbox'
                  id='checkbox-1'
                  className='tableCheckbox sr-only'
                  onChange={() => {
                    setIsChecked(!isChecked)
                  }}
                />
                <label
                  htmlFor='checkbox-1'
                  className='flex items-center text-base font-medium cursor-pointer text-body-color dark:text-dark-6'
                >
                  <span
                    className={`icon-box mr-4 flex h-4 w-4 items-center justify-center rounded-[3px] border-[.5px] text-white ${
                      isChecked
                        ? 'bg-primary! border-primary'
                        : 'border-stroke bg-white dark:border-dark-3 dark:bg-dark'
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
                  {header.name}
                </label>
              </div>
            ) : (
              <p className='text-base font-medium text-body-color dark:text-dark-6'>
                {header.name}
              </p>
            )}
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
        <tr className='hover:bg-gray-2 dark:hover:bg-dark-3' key={index}>
          <td className='py-4 pl-10 pr-4'>
            <Checkbox index={index} name={row.name} />
          </td>
          <td className='p-4'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.subject}</p>
          </td>
          <td className='py-4 pl-4 pr-10'>
            <p className='text-base text-body-color dark:text-dark-6 text-right'>{row.date}</p>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

const TableBottom = ({ pagination }) => {
  return (
    <div className='flex items-center justify-between p-5 mt-2 border-t sm:px-6 border-stroke dark:border-dark-3'>
      <p className='text-base text-left text-dark dark:text-white'>
        {pagination}
      </p>
      <div className='flex items-center justify-end space-x-3'>
        <button className='flex h-[30px] w-[30px] items-center justify-center rounded-sm border border-stroke bg-[#FAFBFF] text-body-color dark:border-dark-3 dark:bg-dark dark:text-dark-6 hover:border-primary hover:bg-primary hover:text-white'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.25 10C14.8023 10 15.25 9.55228 15.25 9C15.25 8.44771 14.8023 8 14.25 8L14.25 10ZM3.75 9L3.04289 8.29289C2.65237 8.68342 2.65237 9.31658 3.04289 9.70711L3.75 9ZM8.29289 14.9571C8.68342 15.3476 9.31658 15.3476 9.70711 14.9571C10.0976 14.5666 10.0976 13.9334 9.70711 13.5429L8.29289 14.9571ZM9.7071 4.45711C10.0976 4.06658 10.0976 3.43342 9.7071 3.04289C9.31658 2.65237 8.68342 2.65237 8.29289 3.04289L9.7071 4.45711ZM14.25 8L3.75 8L3.75 10L14.25 10L14.25 8ZM9.70711 13.5429L4.4571 8.29289L3.04289 9.70711L8.29289 14.9571L9.70711 13.5429ZM4.4571 9.70711L9.7071 4.45711L8.29289 3.04289L3.04289 8.29289L4.4571 9.70711Z'
              fill='currentColor'
            />
          </svg>
        </button>
        <button className='flex h-[30px] w-[30px] items-center justify-center rounded-sm border border-stroke bg-[#FAFBFF] text-body-color dark:border-dark-3 dark:bg-dark dark:text-dark-6 hover:border-primary hover:bg-primary hover:text-white'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.75 8C3.19772 8 2.75 8.44772 2.75 9C2.75 9.55229 3.19772 10 3.75 10V8ZM14.25 9L14.9571 9.70711C15.3476 9.31658 15.3476 8.68342 14.9571 8.29289L14.25 9ZM9.70711 3.04289C9.31658 2.65237 8.68342 2.65237 8.29289 3.04289C7.90237 3.43342 7.90237 4.06658 8.29289 4.45711L9.70711 3.04289ZM8.29289 13.5429C7.90237 13.9334 7.90237 14.5666 8.29289 14.9571C8.68342 15.3476 9.31658 15.3476 9.70711 14.9571L8.29289 13.5429ZM3.75 10H14.25V8H3.75V10ZM8.29289 4.45711L13.5429 9.70711L14.9571 8.29289L9.70711 3.04289L8.29289 4.45711ZM13.5429 8.29289L8.29289 13.5429L9.70711 14.9571L14.9571 9.70711L13.5429 8.29289Z'
              fill='currentColor'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

const IconStar = () => {
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
        className='flex items-center text-base font-normal cursor-pointer text-body-color dark:text-dark-6'
      >
        <span
          className={`icon-box mr-4 flex h-4 w-4 items-center justify-center rounded-[3px] border-[.5px] text-white ${
            isChecked ? 'bg-primary! border-primary' : 'border-stroke bg-white dark:border-dark-3 dark:bg-dark'
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
        <span className='pr-3'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.1034 3.81714C11.4703 3.07397 12.53 3.07397 12.8968 3.81714L14.8577 7.7896C15.0032 8.08445 15.2844 8.28891 15.6098 8.33646L19.9964 8.97763C20.8163 9.09747 21.1431 10.1053 20.5495 10.6835L17.3769 13.7735C17.1411 14.0033 17.0334 14.3344 17.0891 14.6589L17.8376 19.0231C17.9777 19.8401 17.1201 20.4631 16.3865 20.0773L12.4656 18.0153C12.1742 17.8621 11.8261 17.8621 11.5347 18.0153L7.61377 20.0773C6.88014 20.4631 6.02259 19.8401 6.16271 19.0231L6.91122 14.6589C6.96689 14.3344 6.85922 14.0033 6.62335 13.7735L3.45082 10.6835C2.85722 10.1053 3.18401 9.09747 4.00392 8.97763L8.39051 8.33646C8.71586 8.28891 8.99704 8.08445 9.14258 7.7896L11.1034 3.81714Z'
              fill='#FFD02C'
            />
          </svg>
        </span>
        {name}
      </label>
    </div>
  )
}