import { email } from "../assets/Data";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-700 to-gray-900  text-gray-300"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form action={email} method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Type your Name"
              className="p-2 bg-transparent border-2 rounded-md text-gray-300 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Type your Email"
              className="p-2 bg-transparent border-2 my-4 rounded-md text-gray-300 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message here"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-gray-300 focus:outline-none"
            ></textarea>
            <button className="text-gray-300 text-xl font-bold bg-gradient-to-b from-cyan-600 to-blue-600 px-6 py-3 my-5 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
