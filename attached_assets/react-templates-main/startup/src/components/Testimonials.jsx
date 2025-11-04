import userOne from "../assets/images/testimonials/testimonial-05/image-01.jpg";
import userTwo from "../assets/images/testimonials/testimonial-05/image-02.jpg";
import userThree from "../assets/images/testimonials/testimonial-05/image-03.jpg";
import userFour from "../assets/images/testimonials/testimonial-05/image-04.jpg";

const testimonialItems = [
  {
    image: userOne,
    name: "Jason Keys",
    position: "Founder @ Dreampeet.",
    details: `I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.`,
  },
  {
    image: userTwo,
    name: "Anee Doe",
    position: "CEO @ Trorex.",
    details: `I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.`,
  },
  {
    image: userThree,
    name: "Dipali Dow",
    position: "Founder @ Cradow.",
    details: `I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.`,
  },
  {
    image: userFour,
    name: "John Doe",
    position: "Founder @ Poettry.",
    details: `I believe in lifelong learning and Learn. is a great place to learn from experts. I've learned a lot and recommend it to all my friends and familys.`,
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="pb-7 pt-20 dark:bg-dark lg:pb-14 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mb-[60px] max-w-[510px] lg:mb-[70px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Testimonials
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  What our Clients Says
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center">
            {testimonialItems.map((item, index) => (
              <div key={index} className="w-full px-4 md:w-1/2">
                <div className="relative mb-10 overflow-hidden rounded-[10px] bg-white p-8 shadow-testimonial-6 dark:bg-dark-2 dark:shadow-none sm:p-10 md:px-6 md:py-10 lg:p-10">
                  <div className="mb-10 flex items-center">
                    <div className="mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-sm md:h-[60px] md:max-w-[60px] lg:h-20 lg:max-w-[80px]">
                      <img src={item.image} alt="image" className="w-full" />
                    </div>
                    <div className="w-full">
                      <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                        {item.name}
                      </h5>
                      <p className="text-xs text-body-color dark:text-dark-6">
                        {item.position}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-body-color dark:text-dark-6">
                    “{item.details}”
                  </p>

                  <div>
                    <span className="absolute right-0 top-0">
                      <svg
                        width="104"
                        height="102"
                        viewBox="0 0 104 102"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.6"
                          d="M28.707 23.8032C31.0493 22.4301 33.9507 22.4301 36.293 23.8032L56.4389 35.6133C58.7351 36.9594 60.1458 39.4218 60.1458 42.0835V65.9165C60.1458 68.5782 58.7351 71.0406 56.4388 72.3867L36.293 84.1968C33.9507 85.5699 31.0493 85.5699 28.707 84.1968L8.56115 72.3867C6.26492 71.0406 4.85417 68.5782 4.85417 65.9165V42.0835C4.85417 39.4218 6.26492 36.9594 8.56115 35.6133L28.707 23.8032Z"
                          stroke="#3758F9"
                        />
                        <path
                          opacity="0.6"
                          d="M105.25 12.7424C107.571 11.4027 110.429 11.4027 112.75 12.7424L144.587 31.1236C146.908 32.4634 148.337 34.9393 148.337 37.6188V74.3812C148.337 77.0607 146.908 79.5366 144.587 80.8764L112.75 99.2576C110.429 100.597 107.571 100.597 105.25 99.2576L73.4128 80.8764C71.0923 79.5366 69.6628 77.0607 69.6628 74.3812V37.6188C69.6628 34.9393 71.0923 32.4634 73.4128 31.1236L105.25 12.7424Z"
                          stroke="#13C296"
                        />
                        <path
                          opacity="0.6"
                          d="M59.25 -23.2576C61.5705 -24.5973 64.4295 -24.5973 66.75 -23.2576L82.1327 -14.3764C84.4532 -13.0366 85.8827 -10.5607 85.8827 -7.8812V9.8812C85.8827 12.5607 84.4532 15.0366 82.1327 16.3764L66.75 25.2576C64.4295 26.5973 61.5705 26.5973 59.25 25.2576L43.8673 16.3764C41.5468 15.0366 40.1173 12.5607 40.1173 9.8812V-7.8812C40.1173 -10.5607 41.5468 -13.0366 43.8673 -14.3764L59.25 -23.2576Z"
                          stroke="#F98B69"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
