import Breadcrumb from "../components/Breadcrumb.jsx";
import ShapeOne from "../components/Shapes/ShapeOne.jsx";

const formItems = [
  {
    id: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "Enter your first name",
  },
  {
    id: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "Enter your last name",
  },
  {
    id: "email",
    type: "email",
    label: "Business Email",
    placeholder: "Enter your Email",
  },
  {
    id: "number",
    type: "text",
    label: "Phone number",
    placeholder: "Enter your number",
  },
  {
    id: "message",
    type: "textarea",
    label: "What are you looking for?",
    placeholder: "Type your message here  ",
  },
];

const Support = () => {
  return (
    <>
      <Breadcrumb pageName="Support" />

      <section className="bg-tg-bg dark:bg-dark relative z-10 overflow-hidden pt-24 pb-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[770px] text-center">
                <h2 className="text-dark mb-3 text-center text-3xl leading-tight font-bold md:text-4xl md:leading-tight xl:text-[45px] xl:leading-tight dark:text-white">
                  Need Help? Open a Ticket
                </h2>
                <p className="text-base leading-relaxed text-body-color dark:text-dark-6 md:text-lg md:leading-relaxed">
                  Submit Your Support Ticket, We will be with you as soon as we
                  are able.
                </p>
              </div>
            </div>
          </div>

          <div className="flex -mx-4">
            <div className="w-full px-4">
              <div className="border-form-stroke dark:border-dark-3 dark:bg-dark-2 relative mx-auto w-full max-w-[770px] border bg-white px-6 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.05)] sm:px-[65px] sm:py-[60px] md:p-10 lg:px-[65px] lg:py-[60px]">
                <form>
                  <div className="flex flex-wrap -mx-4">
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
                              className="w-full px-6 py-4 bg-transparent border resize-none border-stroke text-body-color placeholder-secondary-color focus:border-primary dark:border-dark-3 dark:text-dark-6 dark:focus:border-primary outline-hidden"
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
                              type={item.text}
                              name={item.id}
                              placeholder={item.placeholder}
                              className="w-full px-6 py-4 bg-transparent border border-stroke text-body-color placeholder-secondary-color focus:border-primary dark:border-dark-3 dark:text-dark-6 dark:focus:border-primary outline-hidden"
                            />
                          </div>
                        </div>
                      ),
                    )}

                    <div className="w-full px-4">
                      <div className="text-center">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center py-3 text-base font-medium text-white border border-transparent bg-primary hover:bg-primary/90 px-7"
                        >
                          Submit Ticket
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <div>
                  <span className="absolute -top-5 -right-5 -z-10">
                    <ShapeOne />
                  </span>
                  <span className="absolute -bottom-5 -left-5 -z-10">
                    <ShapeOne />
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

export default Support;
