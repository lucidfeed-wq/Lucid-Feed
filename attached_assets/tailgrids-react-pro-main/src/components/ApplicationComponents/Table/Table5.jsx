import React from "react";

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
  { name: 'Position', styles: 'min-w-[280px]' },
  { name: 'Email', styles: 'min-w-[250px]' },
  { name: 'Role', styles: 'min-w-[140px]' },
  { name: 'Edit', styles: 'min-w-[140px] text-right' },
]

const Table5 = () => {
  return (
    <section className='bg-white dark:bg-dark py-20 lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='max-w-full overflow-x-auto rounded-xl shadow-[0px_3px_8px_0px_rgba(0,0,0,0.08)] bg-white dark:bg-dark-2'>
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

export default Table5;

const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr className='bg-primary text-left'>
        {headers.map((header, index) => (
          <th
            className={`py-4 px-4 first:pl-11 last:pr-11 text-base font-medium text-white ${header.styles}`}
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
          <td className='px-4 py-5 border-t border-stroke dark:border-dark-3 pl-11'>
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
          <td className='px-4 py-5 text-right border-t border-stroke pr-11 dark:border-dark-3'>
            <div className='relative'>
              <select className='text-body-color shadow-1 dark:bg-dark-3 dark:text-dark-6 dark:shadow-card appearance-none rounded-md bg-white py-[6px] pl-3 pr-8 text-sm outline-hidden'>
                <option value='Action' disabled>
                  Action
                </option>
                <option value=''>Edit</option>
                <option value=''>Delete</option>
                <option value=''>Details</option>
              </select>
              <span className='absolute -translate-y-1/2 top-1/2 right-5 text-dark dark:text-dark-7'>
                <svg
                  width={10}
                  height={6}
                  viewBox="0 0 10 6"
                  className="fill-current"
                >
                  <path d="M0.47072 0.732694C0.47072 0.673853 0.500141 0.600303 0.54427 0.556173C0.647241 0.453203 0.809051 0.453203 0.912022 0.541463L4.85431 4.24839C4.92785 4.32194 5.06025 4.32194 5.14851 4.24839L9.09079 0.541464C9.19376 0.438494 9.35557 0.453203 9.45854 0.556174C9.56151 0.659144 9.5468 0.820954 9.44383 0.923924L5.50155 4.63085C5.22206 4.88092 4.78076 4.88092 4.51598 4.63085L0.558981 0.923924C0.50014 0.865084 0.47072 0.806244 0.47072 0.732694Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.22659 0.19111L5.00141 3.74057L8.76422 0.2024C9.08459 -0.110932 9.54201 -0.0260654 9.79139 0.223319C10.112 0.543965 10.0277 1.00575 9.77668 1.25677L9.76644 1.26701L5.81552 4.98175C5.36257 5.38702 4.6445 5.39893 4.19352 4.97378C4.19327 4.97354 4.19377 4.97401 4.19352 4.97378L0.225953 1.25695C0.102762 1.13375 -4.20186e-08 0.961273 -3.20269e-08 0.732689C-2.40601e-08 0.550431 0.0780105 0.356728 0.211421 0.223318C0.494701 -0.0599624 0.935574 -0.0583303 1.21836 0.184061L1.22659 0.19111ZM4.51598 4.63085C4.78076 4.88092 5.22206 4.88092 5.50155 4.63085L9.44383 0.923924C9.5468 0.820954 9.56151 0.659144 9.45854 0.556174C9.35557 0.453203 9.19376 0.438494 9.09079 0.541464L5.14851 4.24839C5.06025 4.32194 4.92785 4.32194 4.85431 4.24839L0.912022 0.541463C0.809051 0.453203 0.647241 0.453203 0.54427 0.556173C0.500141 0.600303 0.47072 0.673853 0.47072 0.732694C0.47072 0.806244 0.50014 0.865084 0.558981 0.923924L4.51598 4.63085Z"
                  />
                </svg>
              </span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
