import React from 'react';

const LeftColumn = ({ title, subtitle, img, children }) => {
  return (
    <div className='w-full px-5 md:w-1/2'>
      <div className='mb-8 rounded-lg border border-stroke bg-white p-7 shadow-two sm:p-10 md:mb-0 md:p-7 lg:p-10'>
        <h3 className='mb-2 text-2xl font-semibold text-black'>{title}</h3>
        <p className='mb-6 text-base text-body-color'>{subtitle}</p>
        <form>
          <div className='relative z-30 mb-6 h-[90px] w-full max-w-[90px] rounded-full'>
            <img
              src={img}
              alt='profile'
              className='h-full w-full rounded-full object-cover object-center'
            />
            <label
              htmlFor='profile'
              className='absolute -bottom-2 right-0 left-0 mx-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-stroke bg-white text-body-color'
            >
              <svg
                width='10'
                height='9'
                viewBox='0 0 10 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1H2.5L3.20711 0.292893C3.39464 0.105356 3.649 0 3.91421 0H6.08579C6.351 0 6.60536 0.105357 6.79289 0.292893L7.5 1H9C9.26522 1 9.51957 1.10536 9.70711 1.29289C9.89464 1.48043 10 1.73478 10 2V8C10 8.26522 9.89464 8.51957 9.70711 8.70711C9.51957 8.89464 9.26522 9 9 9H1C0.734784 9 0.48043 8.89464 0.292893 8.70711C0.105357 8.51957 0 8.26522 0 8V2C0 1.73478 0.105357 1.48043 0.292893 1.29289C0.48043 1.10536 0.734784 1 1 1ZM5 2.5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5C2.5 5.66304 2.76339 6.29893 3.23223 6.76777C3.70107 7.23661 4.33696 7.5 5 7.5C5.66304 7.5 6.29893 7.23661 6.76777 6.76777C7.23661 6.29893 7.5 5.66304 7.5 5C7.5 4.33696 7.23661 3.70107 6.76777 3.23223C6.29893 2.76339 5.66304 2.5 5 2.5ZM5 3.5C5.39782 3.5 5.77936 3.65804 6.06066 3.93934C6.34196 4.22064 6.5 4.60218 6.5 5C6.5 5.39782 6.34196 5.77936 6.06066 6.06066C5.77936 6.34196 5.39782 6.5 5 6.5C4.60218 6.5 4.22064 6.34196 3.93934 6.06066C3.65804 5.77936 3.5 5.39782 3.5 5C3.5 4.60218 3.65804 4.22064 3.93934 3.93934C4.22064 3.65804 4.60218 3.5 5 3.5Z'
                  fill='currentColor'
                ></path>
              </svg>
              <input
                type='file'
                name='profile'
                id='profile'
                className='sr-only'
              />
            </label>
          </div>
          {children}
        </form>
      </div>
    </div>
  )
}

export default LeftColumn;
