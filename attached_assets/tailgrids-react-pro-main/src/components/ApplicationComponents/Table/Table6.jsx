import React from "react";

const tableData = [
  {
    name: 'Free Package',
    rate: '$0.00',
    invoiceDate: '25 Dec, 2024',
    paid: true,
    unpaid: false,
    pending: false,
  },
  {
    name: 'Standard Package',
    rate: '$59.00',
    invoiceDate: '25 Dec, 2024',
    paid: true,
    unpaid: false,
    pending: false,
  },
  {
    name: 'Business Package',
    rate: '$99.00',
    invoiceDate: '25 Dec, 2024',
    paid: false,
    unpaid: true,
    pending: false,
  },
  {
    name: 'Standard Package',
    rate: '$59.00',
    invoiceDate: '25 Dec, 2024',
    paid: false,
    unpaid: false,
    pending: true,
  },
]

const headers = [
  { name: 'Package', styles: 'min-w-[220px] text-black' },
  { name: 'Invoice date ', styles: 'min-w-[150px] text-black' },
  { name: 'Status', styles: 'min-w-[120px] text-body-color' },
  { name: 'Actions', styles: 'min-w-[100px] text-body-color' },
]

const Table6 = () => {
  return (
    <section className='bg-white dark:bg-dark py-20 lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap justify-center'>
          <div className='w-full px-4 lg:w-10/12'>
            <div className='p-6 bg-white rounded-[10px] dark:bg-dark-2 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)] lg:p-9'>
              <div className='max-w-full overflow-x-auto'>
                <table className='w-full table-auto'>
                  <TableHead headers={headers} />
                  <TableBody data={tableData} />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Table6;

const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr className='text-left rounded-sm bg-gray-2 dark:bg-dark-3'>
        {headers.map((header, index) => (
          <th
            className={`py-4 px-4 first:pl-9 xl:first:pl-11 last:pr-9 xl:last:pr-11 text-base font-medium uppercase text-dark dark:text-white ${header.styles}`}
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
          <td className='px-4 py-5 border-b border-stroke dark:border-dark-3 pl-9 xl:pl-11'>
            <h5 className='text-base font-medium text-dark dark:text-white'>{row.name}</h5>
            <p className='text-sm dark:text-dark-6 text-body-color'>{row.rate}</p>
          </td>
          <td className='px-4 py-5 border-b border-stroke dark:border-dark-3'>
            <p className='text-base text-dark dark:text-dark-6'>{row.invoiceDate}</p>
          </td>
          <td className='px-4 py-5 border-b border-stroke dark:border-dark-3'>
            {row.paid && (
              <p className='inline-flex px-3 py-1 text-sm font-medium rounded-full bg-green-light-6 text-green-dark'>
                Paid
              </p>
            )}
            {row.unpaid && (
              <p className='inline-flex px-3 py-1 text-sm font-medium rounded-full bg-red-light-5 text-red-dark'>
                Unpaid
              </p>
            )}
            {row.pending && (
              <p className='inline-flex px-3 py-1 text-sm font-medium rounded-full bg-yellow-light-4 text-yellow-dark-2'>
                Pending
              </p>
            )}
          </td>
          <td className='px-4 py-5 border-b border-stroke dark:border-dark-3'>
            <div className='flex items-center space-x-4'>
              <button className='text-body-color hover:text-primary dark:text-dark-6'>
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0001 8.14688C9.41885 8.14688 8.14697 9.41875 8.14697 11C8.14697 12.5813 9.41885 13.8531 11.0001 13.8531C12.5813 13.8531 13.8532 12.5813 13.8532 11C13.8532 9.41875 12.5813 8.14688 11.0001 8.14688ZM11.0001 12.3063C10.2782 12.3063 9.69385 11.7219 9.69385 11C9.69385 10.2781 10.2782 9.69375 11.0001 9.69375C11.722 9.69375 12.3063 10.2781 12.3063 11C12.3063 11.7219 11.722 12.3063 11.0001 12.3063Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21.0375 9.79688C19.0781 6.875 16.3625 3.91875 11 3.91875C5.6375 3.91875 2.92188 6.875 0.9625 9.79688C0.48125 10.5188 0.48125 11.4813 0.9625 12.2031C2.92188 15.0906 5.6375 18.0812 11 18.0812C16.3625 18.0812 19.0781 15.0906 21.0375 12.2031C21.5188 11.4469 21.5188 10.5188 21.0375 9.79688ZM19.7656 11.3438C17.2563 15.0219 14.7469 16.5344 11 16.5344C7.25313 16.5344 4.74375 15.0219 2.23438 11.3438C2.09687 11.1375 2.09687 10.8625 2.23438 10.6563C4.74375 6.97813 7.25313 5.46563 11 5.46563C14.7469 5.46563 17.2563 6.97813 19.7656 10.6563C19.8687 10.8625 19.8687 11.1375 19.7656 11.3438Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button className='text-body-color hover:text-primary dark:text-dark-6'>
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.6251 14.2656C20.2126 14.2656 19.8345 14.6094 19.8345 15.0562V18.1156C19.8345 18.425 19.5938 18.6656 19.2845 18.6656H2.71572C2.40635 18.6656 2.16572 18.425 2.16572 18.1156V15.0562C2.16572 14.6437 1.82197 14.2656 1.3751 14.2656C0.928223 14.2656 0.584473 14.6094 0.584473 15.0562V18.1156C0.584473 19.2844 1.5126 20.2125 2.68135 20.2125H19.2845C20.4532 20.2125 21.3813 19.2844 21.3813 18.1156V15.0562C21.4157 14.6094 21.0376 14.2656 20.6251 14.2656Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.4501 15.0906C10.5876 15.2281 10.7938 15.2969 11.0001 15.2969C11.2063 15.2969 11.3782 15.2281 11.5501 15.0906L16.4657 10.3125C16.7751 10.0031 16.7751 9.52187 16.5001 9.2125C16.1907 8.90312 15.7095 8.90312 15.4001 9.17812L11.7907 12.7187V2.57812C11.7907 2.16562 11.447 1.7875 11.0001 1.7875C10.5876 1.7875 10.2095 2.13125 10.2095 2.57812V12.7187L6.60009 9.2125C6.29072 8.90312 5.80947 8.9375 5.50009 9.2125C5.19072 9.52187 5.22509 10.0031 5.50009 10.3125L10.4501 15.0906Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
