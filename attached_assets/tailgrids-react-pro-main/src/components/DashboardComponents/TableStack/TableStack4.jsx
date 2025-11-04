import React from 'react';

const TableStack4 = () => {
  return (
    <section className='bg-gray relative z-10 overflow-hidden py-20 lg:py-[100px]'>
      <div className='container mx-auto'>
        <TableStackItem
          title='Software Engineer'
          type='Full Time'
          buttonLink='/#'
          buttonText='Apply Now'
          details='We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.'
          siteLink='/#'
          siteName='www.website.com'
          salaryRange='$20k - $25k'
          officePlace='New York'
        />
        <TableStackItem
          title='Sales Manager'
          type='Full Time'
          buttonLink='/#'
          buttonText='Apply Now'
          details='We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.'
          siteLink='/#'
          siteName='www.website.com'
          salaryRange='$20k - $25k'
          officePlace='New York'
        />
        <TableStackItem
          title='Ui/Ux Designer'
          type='Full Time'
          buttonLink='/#'
          buttonText='Apply Now'
          details='We are looking for Enrollment Advisors who are looking to take 30-35 appointments per week. All leads are pre-scheduled.'
          siteLink='/#'
          siteName='www.website.com'
          salaryRange='$20k - $25k'
          officePlace='New York'
        />
      </div>
    </section>
  )
}

export default TableStack4

const TableStackItem = ({
  title,
  type,
  buttonLink,
  buttonText,
  details,
  siteLink,
  siteName,
  salaryRange,
  officePlace,
}) => {
  return (
    <div className='shadow-three mx-auto mb-8 w-full max-w-[570px] rounded-lg bg-white'>
      <div className='border-stroke flex flex-wrap justify-between border-b px-6 pt-5'>
        <h3 className='mb-5 mr-4 text-xl font-medium text-black'>{title}</h3>
        <div className='mb-5 flex items-center space-x-4'>
          <p className='text-base font-medium text-black'>{type}</p>
          <a
            href={buttonLink}
            className='bg-primary rounded-sm py-1 px-6 text-base font-medium text-white hover:bg-primary/90'
          >
            {buttonText}
          </a>
        </div>
      </div>
      <div className='px-6 pt-5'>
        <p className='text-body-color mb-5 text-base'>{details}</p>
        <div className='flex flex-wrap'>
          <p className='mr-5 mb-5 flex items-center'>
            <span className='pr-[6px]'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.375 5.28125C17.0938 3 14.875 1.34375 12.3438 0.6875C11.5 0.5 10.75 0.40625 10 0.40625C9.1875 0.40625 8.375 0.5 7.59375 0.71875C5.09375 1.375 2.90625 3.03125 1.625 5.3125C0.8125 6.78125 0.375 8.375 0.375 10.0313V10.25C0.40625 12 0.9375 13.7188 1.875 15.2188C3.40625 17.625 5.90625 19.2188 8.6875 19.5313C9.0625 19.5938 9.46875 19.625 9.96875 19.625C10.3438 19.625 10.75 19.5938 11.1563 19.5625C14 19.2188 16.5313 17.625 18.0938 15.1875C19.0313 13.7188 19.5625 12.0313 19.5938 10.25V10C19.625 8.40625 19.1875 6.75 18.375 5.28125ZM16.0313 9.46875C15.9375 8.40625 15.6563 7.40625 15.25 6.4375H17.7188C18.1563 7.40625 18.4063 8.4375 18.4688 9.46875H16.0313ZM13.4063 5.34375H10.5313V1.96875C11.4688 2.625 12.4375 3.75 13.4063 5.34375ZM9.46875 1.9375V5.34375H6.4375C7.4375 3.75 8.46875 2.59375 9.46875 1.9375ZM9.46875 6.4375V9.46875H4.90625C5 8.40625 5.28125 7.375 5.78125 6.4375H9.46875ZM9.46875 10.5625V14.4063H6.03125C5.34375 13.25 4.96875 11.9063 4.90625 10.5625H9.46875ZM9.46875 15.5V18.0938C8.5 17.5313 7.53125 16.625 6.71875 15.5H9.46875ZM10.5625 18.0938V15.5H13.4375C12.6563 16.5625 11.6875 17.4688 10.5625 18.0938ZM10.5625 14.4063V10.5625H15C14.9688 11.9063 14.6563 13.2188 14.0625 14.4063H10.5625ZM10.5625 9.46875V6.4375H14.0625C14.5313 7.375 14.8438 8.40625 14.9688 9.46875H10.5625ZM17.125 5.34375H14.6875C13.75 3.78125 12.875 2.5625 11.9688 1.71875C12 1.71875 12.0313 1.71875 12.0938 1.75C14.1563 2.28125 15.9688 3.5625 17.125 5.34375ZM7.875 1.78125C7.90625 1.78125 7.90625 1.78125 7.9375 1.78125C7 2.625 6.09375 3.8125 5.15625 5.3125C5.15625 5.3125 5.15625 5.34375 5.125 5.34375H2.90625C4.0625 3.5625 5.84375 2.28125 7.875 1.78125ZM2.28125 6.4375H4.5625C4.15625 7.40625 3.90625 8.40625 3.8125 9.46875H1.5C1.5625 8.40625 1.84375 7.375 2.28125 6.4375ZM1.5 10.5625H3.78125C3.84375 11.9063 4.15625 13.2188 4.75 14.4063H2.6875C2 13.2188 1.59375 11.9063 1.5 10.5625ZM3.46875 15.5H5.375C6.0625 16.5625 6.875 17.5 7.71875 18.2188C6.0625 17.7813 4.59375 16.8125 3.46875 15.5ZM12.375 18.1875C13.3125 17.4375 14.0938 16.5313 14.7188 15.5H16.5C15.4063 16.7813 14 17.7188 12.375 18.1875ZM17.2813 14.4063H15.2813C15.8125 13.1875 16.0938 11.875 16.0938 10.5625H18.5C18.4063 11.9063 18 13.25 17.2813 14.4063Z'
                  fill='#3056D3'
                />
              </svg>
            </span>
            <a href={siteLink} className='text-body-color text-base'>
              {siteName}
            </a>
          </p>
          <p className='text-body-color mr-5 mb-5 flex items-center text-base'>
            <span className='pr-[6px]'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.4062 9.46875H7.59375C5.90625 9.46875 4.5 8.15625 4.5 6.53125C4.5 4.90625 5.875 3.59375 7.59375 3.59375H14.75C15.0625 3.59375 15.3125 3.34375 15.3125 3.03125C15.3125 2.71875 15.0312 2.5 14.7188 2.5H11.1875V0.9375C11.1875 0.625 10.9375 0.375 10.625 0.375C10.3125 0.375 10.0938 0.625 10.0938 0.9375V2.5H7.5625C5.25 2.5 3.375 4.3125 3.375 6.53125C3.375 8.75 5.25 10.5625 7.5625 10.5625H12.4062C14.0938 10.5625 15.5 11.875 15.5 13.5C15.5 15.125 14.125 16.4375 12.4062 16.4375H4.25C3.9375 16.4375 3.6875 16.6875 3.6875 17C3.6875 17.3125 3.9375 17.5625 4.25 17.5625H10.0938V19.125C10.0938 19.4375 10.3438 19.6875 10.6562 19.6875C10.9688 19.6875 11.2188 19.4375 11.2188 19.125V17.5625H12.4375C14.75 17.5625 16.625 15.75 16.625 13.5312C16.625 11.3125 14.7188 9.46875 12.4062 9.46875Z'
                  fill='#3056D3'
                />
              </svg>
            </span>
            {salaryRange}
          </p>
          <p className='text-body-color mb-5 flex items-center text-base'>
            <span className='pr-[6px]'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10 0.40625C5.65625 0.40625 2.09375 3.84375 2.09375 8.03125C2.09375 11.375 6.875 16.9063 8.9375 19.1563C9.21875 19.4688 9.59375 19.625 10 19.625C10.4063 19.625 10.7813 19.4688 11.0625 19.1563C13.125 16.9375 17.9063 11.375 17.9063 8.03125C17.9063 3.8125 14.3438 0.40625 10 0.40625ZM10.25 18.4063C10.0938 18.5625 9.875 18.5625 9.75 18.4063C8.21875 16.75 3.1875 11.0625 3.1875 8.03125C3.1875 4.40625 6.25 1.5 10 1.5C13.75 1.5 16.8125 4.4375 16.8125 8.03125C16.8125 11.0625 11.7813 16.7188 10.25 18.4063Z'
                  fill='#3056D3'
                />
                <path
                  d='M10 4.90625C8.15625 4.90625 6.625 6.40625 6.625 8.28125C6.625 10.125 8.125 11.6562 10 11.6562C11.875 11.6562 13.375 10.1562 13.375 8.28125C13.375 6.40625 11.8438 4.90625 10 4.90625ZM10 10.5312C8.75 10.5312 7.71875 9.5 7.71875 8.25C7.71875 7 8.75 5.96875 10 5.96875C11.25 5.96875 12.2813 7 12.2813 8.25C12.2813 9.5 11.25 10.5312 10 10.5312Z'
                  fill='#3056D3'
                />
              </svg>
            </span>
            {officePlace}
          </p>
        </div>
      </div>
    </div>
  )
}
