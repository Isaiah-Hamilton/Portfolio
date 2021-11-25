const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-2xl px-6 py-16 m-auto bg-white dark:bg-gray-800"
    >
      <h2 className="text-4xl font-semibold text-center text-gray-800 dark:text-white">
        Get In Touch
      </h2>
      <p className="mt-3 text-center text-gray-600 dark:text-gray-400">
        I&apos;m currently looking for intern Software Engineering
        opportunities! If you know of any positions available, if you have any
        questions, or if you want to get in touch, please email me down below.
      </p>
      <a href="mailto:isaiah7hamilton@gmail.com">
        <button
          className="
                    items-center
                    block px-10
                    py-4 text-base
                    font-medium
                    text-center
                    text-white
                    transition
                    duration-500
                    ease-in-out
                    transform
                    bg-blue-400
                    rounded-xl
                    hover:bg-blue-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-blue-500
                    m-auto
                    mt-6
                  "
        >
          {" "}
          Contact Me{" "}
        </button>
      </a>
      {/*<div className="mt-6 ">
        <div className="items-center -mx-2 md:flex">
          <div className="w-full mx-2">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Name
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="text"
            />
          </div>

          <div className="w-full mx-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              E-mail
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Message
          </label>

          <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="
            items-center
            block px-10
            py-4 text-base
            font-medium
            text-center
            text-white
            transition
            duration-500
            ease-in-out
            transform
            bg-blue-400
            rounded-xl
            hover:bg-blue-500
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-blue-500
          "
          >
            {" "}
            Send Message{" "}
          </button>
        </div>
  </div>*/}
    </section>
  );
};

export default Contact;
