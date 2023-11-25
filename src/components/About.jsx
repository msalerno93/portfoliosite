import { about } from "../assets/Data";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-gray-900 text-gray-300"
    >
      <div className="max-w-screen-lg p-4 mx-auto px-5 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 px-3 border-gray-500">
            About
          </p>
        </div>
        {about.map(({ id, info }) => {
          return (
            <p key={id} className="text-xl mt-8 px-3">
              {info}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default About;
