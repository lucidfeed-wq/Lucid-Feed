import React from 'react'

const tableData = [
  {
    name: 'Musharof Chowdhury',
    title: 'Multidisciplinary Web Entrepreneur',
    email: 'musharof@example.com',
    role: 'Owner',
  },
  {
    name: 'Naimur Rahman',
    title: 'Website Front-end Developer',
    email: 'naimurrahman@example.com',
    role: 'Member',
  },
  {
    name: 'Shafiq Hammad',
    title: 'Regional Paradigm Technician',
    email: 'shafiq.hd@example.com',
    role: 'Moderator',
  },
  {
    name: 'Alex Semuyel',
    title: 'Applications Engineer',
    email: 'alex.semuel@example.com',
    role: 'Admin',
  },
  {
    name: 'Sulium Keliym',
    title: 'Lead Implementation Liaison',
    email: 'suliym.info@example.com',
    role: 'Member',
  },
  {
    name: 'Devid Deekook',
    title: 'Central Security Manager',
    email: 'devid.decok@example.com',
    role: 'Moderator',
  },
]

const headers = [
  { name: 'Name', styles: 'min-w-[280px]' },
  { name: 'Title', styles: 'min-w-[280px]' },
  { name: 'Email', styles: 'min-w-[250px]' },
  { name: 'Role', styles: 'min-w-[140px]' },
  { name: '', styles: 'min-w-[140px]' },
]

const Table3 = () => {
  return (
    <section className='bg-white dark:bg-dark py-20 lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='max-w-full overflow-x-auto bg-white dark:bg-dark-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.08)] rounded-xl'>
              <table className='w-full table-auto'>
                <TableHead headers={headers} />
                <TableBody data={tableData} />
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Table3

const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr className='text-left bg-gray dark:bg-dark-3'>
        {headers.map((header, index) => (
          <th
            className={`text-body-color dark:text-dark-7 py-4 px-4 first:pl-11 last:pr-11 text-base font-medium uppercase ${header.styles}`}
            key={index}
          >
            {header.name}
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
          <td className='px-4 py-5 border-t border-stroke pl-11 dark:border-dark-3'>
            <h5 className='text-base text-body-color dark:text-dark-6'>
              {row.name}
            </h5>
          </td>
          <td className='px-4 py-5 border-t border-stroke dark:border-dark-3'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.title}</p>
          </td>
          <td className='px-4 py-5 border-t border-stroke dark:border-dark-3'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.email}</p>
          </td>
          <td className='px-4 py-5 border-t border-stroke dark:border-dark-3'>
            <p className='text-base text-body-color dark:text-dark-6'>{row.role}</p>
          </td>
          <td className='px-4 py-5 text-center border-t border-stroke pr-11 dark:border-dark-3'>
            <button className='text-base font-medium text-primary'>Edit</button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
