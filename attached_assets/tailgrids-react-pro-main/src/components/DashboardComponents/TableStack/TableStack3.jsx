import React from 'react';

const TableStack3 = () => {
  return (
    <section className='relative z-10 overflow-hidden bg-white py-20 lg:py-[100px]'>
      <div className='container mx-auto'>
        <TableStackWrapper title='Products List'>
          <StackItem
            img='https://cdn.tailgrids.com/2.0/image/dashboard/images/prodcuts-list/image-01.jpg'
            name="Apple Macbook M1 16'' 2022"
            details='1TB SSD, 16GB Ram'
            price='$2999'
            shipped
          />
          <StackItem
            img='https://cdn.tailgrids.com/2.0/image/dashboard/images/prodcuts-list/image-02.jpg'
            name='Apple Watch Series 7'
            details='50m water resistant'
            price='$400'
          />
          <StackItem
            img='https://cdn.tailgrids.com/2.0/image/dashboard/images/prodcuts-list/image-03.jpg'
            name='Google Pixel 5'
            details='8GB Ram 256GB Rom'
            price='$800'
            shipped
          />
        </TableStackWrapper>
      </div>
    </section>
  )
}

export default TableStack3

const TableStackWrapper = ({ title, children }) => {
  return (
    <div className='mx-auto w-full max-w-[770px]'>
      <div className='justify-between sm:flex'>
        <h3 className='mb-8 text-2xl font-medium text-black md:text-[28px]'>
          {title}
        </h3>
        <div className='mb-8'>
          <div className='flex items-center sm:justify-end'>
            <label
              htmlFor='sorting'
              className='mr-4 text-base font-medium text-black'
            >
              Filter by:
            </label>
            <div className='relative z-20 bg-white'>
              <select
                name='sorting'
                id='sorting'
                className='relative z-20 inline-block appearance-none rounded-sm border border-stroke bg-transparent py-2 pl-5 pr-10 outline-hidden'
              >
                <option value=''>Latest</option>
                <option value=''>Oldest</option>
              </select>
              <span className='absolute right-5 top-1/2 z-10 -translate-y-1/2'>
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.0017 8.77433C5.7767 8.77433 5.5517 8.69933 5.3642 8.53058L0.339198 3.80558C0.207948 3.67433 0.207948 3.46808 0.320448 3.33683C0.451698 3.20558 0.657948 3.20558 0.789198 3.31808L5.8142 8.04308C5.90795 8.13683 6.0767 8.13683 6.1892 8.04308L11.2142 3.31808C11.3454 3.18683 11.5517 3.20558 11.6829 3.33683C11.8142 3.46808 11.7954 3.67433 11.6642 3.80558L6.6392 8.51183C6.4517 8.68058 6.2267 8.77433 6.0017 8.77433Z'
                    fill='#212B36'
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full overflow-x-auto border border-stroke bg-white py-[15px] shadow-three'>
        <table className='table w-full'>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  )
}

const StackItem = ({ img, name, details, price, shipped }) => {
  return (
    <tr>
      <td className='min-w-[375px] py-[15px] pl-7 pr-3'>
        <div className='flex items-center'>
          <div className='mr-[18px] h-[70px] w-full max-w-[70px] rounded-sm'>
            <img src={img} alt='product' />
          </div>
          <div>
            <h3 className='text-lg font-semibold text-black'>{name}</h3>
            <p className='text-base text-body-color'>{details}</p>
          </div>
        </div>
      </td>
      <td className='min-w-[130px] py-[18px]'>
        {shipped && (
          <span className='rounded-full bg-[#D7F8E4] py-1 px-4 text-sm font-medium text-success'>
            Shipped
          </span>
        )}
        {!shipped && (
          <span className='rounded-full bg-[#FCF3CB] py-1 px-4 text-sm font-medium text-[#9F531F]'>
            Processing
          </span>
        )}
      </td>
      <td className='min-w-[150px] py-[18px] pr-7 text-right'>
        <p className='text-lg font-semibold text-black'>{price}</p>
      </td>
    </tr>
  )
}
