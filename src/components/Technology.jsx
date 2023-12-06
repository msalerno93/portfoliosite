import { technologies } from "../assets/Data";

const Technology = () => {

  return (
    <div
      name="technology"
      className="bg-gradient-to-b from-gray-900 to-gray-700 w-full h-screen pt-20 pb-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-300">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500  inline">
            Experience
          </p>
          <p className="pt-5">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 pb-2">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;