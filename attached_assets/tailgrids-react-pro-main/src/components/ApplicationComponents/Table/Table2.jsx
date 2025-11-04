import React from "react";

const tableData = [
  {
    name: 'Musharof Chowdhury',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-01.png',
    email: 'musharof@example.com',
    title: 'Multidisciplinary Web Entrepreneur',
    position: 'Developer',
    active: true,
    role: 'Admin',
  },
  {
    name: 'Nenifer Lofess',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-02.png',
    email: 'loffes.cooper@example.com',
    title: 'Regional Paradigm Technician',
    position: 'Optimization',
    active: true,
    role: 'Owner',
  },
  {
    name: 'Jhon Smith',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-03.png',
    email: 'jhon.smith@example.com',
    title: 'Regional Paradigm Technician',
    position: 'Optimization',
    active: true,
    role: 'Member',
  },
  {
    name: 'Sulium Keliym',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-04.png',
    email: 'suliym.info@example.com',
    title: 'Lead Implementation Liaison',
    position: 'Mobility',
    active: true,
    role: 'Admin',
  },
  {
    name: 'Alex Semuyel',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-05.png',
    email: 'alex.semuel@example.com',
    title: 'Applications Engineer',
    position: 'Security',
    active: false,
    role: 'Admin',
  },
  {
    name: 'Humil Limition',
    image:
      'https://cdn.tailgrids.com/2.0/image/application/images/tables/image-06.png',
    email: 'limition@example.com',
    title: 'Regional Paradigm Technician',
    position: 'Optimization',
    active: true,
    role: 'Member',
  },
]

const headers = [
  { name: 'NAME', styles: 'min-w-[300px]' },
  { name: 'TITLE', styles: 'min-w-[280px]' },
  { name: 'STATUS', styles: 'min-w-[140px]' },
  { name: 'ROLE', styles: 'min-w-[140px]' },
  { name: '', styles: 'min-w-[140px]' },
]

const Table2 = () => {
  return (
    <section className='bg-white dark:bg-dark py-20 lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='max-w-full overflow-x-auto bg-white dark:bg-dark-2 shadow-[0px_3px_8px_0px_rgba(0,0,0,0.08)] rounded-[10px]'>
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

export default Table2;

const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr className='text-left bg-gray dark:bg-dark-3'>
        {headers.map((header, index) => (
          <th
            className={`py-4 px-4 first:pl-11 last:pr-11 text-base font-medium uppercase text-dark dark:text-white ${header.styles}`}
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
          <td className='p-4 border-t border-stroke pl-11 dark:border-dark-3'>
            <div className='flex items-center'>
              <img
                src={row.image}
                alt='image'
                className='mr-4 rounded-full h-45 w-11'
              />
              <div>
                <h5 className='text-sm font-medium text-dark dark:text-white'>{row.name}</h5>
                <p className='text-sm text-body-color dark:text-dark-6'>{row.email}</p>
              </div>
            </div>
          </td>
          <td className='p-4 border-t border-stroke dark:border-dark-3'>
            <p className='text-sm text-body-color dark:text-dark-6'>{row.title}</p>
            <p className='text-sm text-body-color dark:text-dark-6'>{row.position}</p>
          </td>
          <td className='p-4 border-t border-stroke dark:border-dark-3'>
            {row.active ? (
              <span className='inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full text-green-dark bg-green-light-6'>
                Active
              </span>
            ) : (
              <span className='inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-full bg-red-light-5 text-red-dark'>
                Deactive
              </span>
            )}
          </td>
          <td className='p-4 border-t border-stroke dark:border-dark-3'>
            <p className='text-sm text-body-color dark:text-dark-6'>{row.role}</p>
          </td>
          <td className='p-4 text-center border-t border-stroke pr-11 dark:border-dark-3'>
            <button className='inline-block px-5 py-2 text-sm font-medium border rounded-full border-primary text-primary hover:bg-primary hover:text-white'>
              Edit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
