import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
import Kagaz from '../assets/KagaZ.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "Kagaz",
      link: "https://ecommerse-react-ui-kagaz.vercel.app/",
    }
  ];

  const clickHandler = (link) => {
    window.location.href = link;
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={Kagaz}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => clickHandler(link)}
                  className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Kagaz
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
