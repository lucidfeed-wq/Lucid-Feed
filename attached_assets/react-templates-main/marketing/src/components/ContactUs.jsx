import ShapeFive from "./Shapes/ShapeFive.jsx";

const formItems = [
  {
    label: "First Name",
    id: "firstName",
    type: "text",
    placeholder: "Enter your first name",
  },
  {
    label: "Last Name",
    id: "lastName",
    type: "text",
    placeholder: "Enter your last name",
  },
  {
    label: "Business Email",
    id: "email",
    type: "email",
    placeholder: "Enter your Email",
  },
  {
    label: "Phone number",
    id: "number",
    type: "text",
    placeholder: "Enter your number",
  },
  {
    label: "What are you looking for?",
    id: "message",
    type: "textarea",
    placeholder: "Type your message here",
  },
];

const ContactUs = () => {
  return (
    <>
      <section className="dark:bg-dark-2 overflow-hidden bg-white py-24">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[770px] text-center">
                <h2 className="text-dark mb-3 text-center text-3xl leading-tight font-bold md:text-4xl md:leading-tight xl:text-[45px] xl:leading-tight dark:text-white">
                  Need Help? Open a Ticket
                </h2>
                <p className="text-body-color dark:text-dark-6 text-base leading-relaxed md:text-lg md:leading-relaxed">
                  Submit Your Support Ticket, We will be with you as soon as we
                  are able.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="border-form-stroke dark:border-dark-3 dark:bg-dark relative z-20 mx-auto w-full max-w-[770px] border bg-white px-6 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.05)] sm:px-[65px] sm:py-[60px] md:p-10 lg:px-[65px] lg:py-[60px]">
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    {formItems.map((item, index) =>
                      item.type === "textarea" ? (
                        <div key={index} className="w-full px-4">
                          <div className="mb-7">
                            <label
                              htmlFor={item.id}
                              className="text-dark mb-2.5 block text-base font-medium dark:text-white"
                            >
                              {item.label}
                            </label>
                            <textarea
                              id={item.id}
                              name={item.id}
                              placeholder={item.placeholder}
                              rows="6"
                              className="border-stroke text-body-color placeholder-secondary-color focus:border-primary dark:border-dark-3 dark:text-dark-6 dark:focus:border-primary w-full resize-none border bg-transparent px-6 py-4 outline-hidden"
                            ></textarea>
                          </div>
                        </div>
                      ) : (
                        <div key={index} className="w-full px-4 md:w-1/2">
                          <div className="mb-7">
                            <label
                              htmlFor={item.id}
                              className="text-dark mb-2.5 block text-base font-medium dark:text-white"
                            >
                              {item.label}
                            </label>
                            <input
                              id={item.id}
                              type={item.type}
                              name={item.id}
                              placeholder={item.placeholder}
                              className="border-stroke text-body-color placeholder-secondary-color focus:border-primary dark:border-dark-3 dark:text-dark-6 dark:focus:border-primary w-full border bg-transparent px-6 py-4 outline-hidden"
                            />
                          </div>
                        </div>
                      ),
                    )}

                    <div className="w-full px-4">
                      <div className="text-center">
                        <button
                          type="submit"
                          className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center border border-transparent px-7 py-3 text-base font-medium text-white"
                        >
                          Submit Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-5 -right-5 -z-10">
                    <ShapeFive />
                  </span>
                  <span className="absolute -bottom-5 -left-5 -z-10">
                    <ShapeFive />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
