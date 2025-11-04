import React from 'react';

const RightColumn = ({ title, subtitle, img }) => {
  return (
    <div className='w-full px-4 lg:w-5/12 2xl:w-1/3'>
      <div className='w-full rounded-lg border border-stroke bg-white lg:w-auto'>
        <h3 className='border-b border-stroke py-4 px-7 text-base font-medium text-black'>
          {title}
        </h3>
        <div className='p-7'>
          <div className='mb-4 flex items-center'>
            <div className='mr-3 h-[55px] w-full max-w-[55px]'>
              <img
                src={img}
                alt='photo'
                className='h-full w-full rounded-full object-cover object-center'
              />
            </div>
            <div>
              <p className='mb-[6px] text-base text-black'>{subtitle}</p>
              <div className='flex space-x-[10px]'>
                <button className='text-sm text-body-color hover:text-danger'>
                  Delete
                </button>
                <label
                  htmlFor='upload'
                  className='cursor-pointer text-sm text-primary'
                >
                  Update
                  <input
                    type='file'
                    className='sr-only'
                    name='upload'
                    id='upload'
                  />
                </label>
              </div>
            </div>
          </div>
          <div className='flex min-h-[180px] w-full items-center justify-center rounded-md border border-dashed border-primary bg-gray p-3'>
            <div className='text-center'>
              <span className='mx-auto mb-[14px] flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white'>
                <svg
                  width={16}
                  height={16}
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M1.9987 9.33398C2.36689 9.33398 2.66536 9.63246 2.66536 10.0007V12.6673C2.66536 12.8441 2.7356 13.0137 2.86063 13.1387C2.98565 13.2637 3.15522 13.334 3.33203 13.334H12.6654C12.8422 13.334 13.0117 13.2637 13.1368 13.1387C13.2618 13.0137 13.332 12.8441 13.332 12.6673V10.0007C13.332 9.63246 13.6305 9.33398 13.9987 9.33398C14.3669 9.33398 14.6654 9.63246 14.6654 10.0007V12.6673C14.6654 13.1978 14.4546 13.7065 14.0796 14.0815C13.7045 14.4566 13.1958 14.6673 12.6654 14.6673H3.33203C2.8016 14.6673 2.29289 14.4566 1.91782 14.0815C1.54274 13.7065 1.33203 13.1978 1.33203 12.6673V10.0007C1.33203 9.63246 1.63051 9.33398 1.9987 9.33398Z'
                    fill='#3056D3'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M7.5286 1.52925C7.78894 1.2689 8.21106 1.2689 8.4714 1.52925L11.8047 4.86258C12.0651 5.12293 12.0651 5.54504 11.8047 5.80539C11.5444 6.06574 11.1223 6.06574 10.8619 5.80539L8 2.94346L5.13807 5.80539C4.87772 6.06574 4.45561 6.06574 4.19526 5.80539C3.93491 5.54504 3.93491 5.12293 4.19526 4.86258L7.5286 1.52925Z'
                    fill='#3056D3'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M7.9987 1.33398C8.36689 1.33398 8.66536 1.63246 8.66536 2.00065V10.0007C8.66536 10.3688 8.36689 10.6673 7.9987 10.6673C7.63051 10.6673 7.33203 10.3688 7.33203 10.0007V2.00065C7.33203 1.63246 7.63051 1.33398 7.9987 1.33398Z'
                    fill='#3056D3'
                  />
                </svg>
              </span>
              <p className='mb-1 text-xs text-body-color'>
                <span className='text-primary'> Click to upload </span> or drag
                and drop
              </p>
              <p className='mx-auto max-w-[126px] text-xs text-body-color'>
                SVG, PNG, JPG or GIF (max, 800 X 800px)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightColumn;
