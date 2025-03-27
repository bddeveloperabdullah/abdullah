import React, { useState } from "react";
import { portfolioItem } from "../../db/Poftfolio/Portfolio";
import { FaGithub, FaLink } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlider = portfolioItem[currentIndex];

  return (
    <>
      <section className="px-5 md:px-10">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white font-montserrat font-semibold text-center py-10">
            Latest <span className="text-secondary">Project</span>
          </h2>

          <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-5">
            {/* portfolio Content  */}
            <div className="text-white w-full md:w-3/6">
              <div className="border-b-2 border-white py-5 space-y-2.5 md:space-y-5">
                <h2 className="text-2xl lg:text-4xl font-montserrat font-semibold">
                  {currentSlider.title}
                </h2>
                <p className="text-sm md:text-base font-worksans font-light">
                  {currentSlider.desc}
                </p>
                <p className="text-sm md:text-xl text-secondary font-worksans font-light">
                  {Array.isArray(currentSlider.stack)
                    ? currentSlider.stack.join(", ")
                    : currentSlider.stack}
                </p>
              </div>

              {/* Link Area  */}
              <div className="mt-5 flex gap-5 pb-5 md:pb-0">
                <Link to={currentSlider.liveLink}>
                  <FaLink className="text-2xl md:text-3xl cursor-pointer hover:text-secondary transition-all duration-300" />
                </Link>

                <Link to={currentSlider.gitLink}>
                  <FaGithub className="text-2xl md:text-3xl cursor-pointer hover:text-secondary transition-all duration-300" />
                </Link>
              </div>
            </div>

            {/* Portfolio Photo  */}
            <div>
              <img
                className="size-96 object-cover rounded-md border-4 border-acent"
                src={currentSlider.photo}
                alt=""
              />
            </div>
          </div>

          {/* Arrow Btn  */}
          <div className="hidden md:flex justify-end gap-3 py-3.5 md:py-0 md:mt-7">
            <div className="size-[35px] rounded-md flex justify-center items-center border-2 border-acent cursor-pointer">
              <IoIosArrowBack className="text-2xl text-acent" />
            </div>
            <div className="size-[35px] rounded-md flex justify-center items-center border-2 border-acent cursor-pointer">
              <IoIosArrowForward className="text-2xl text-acent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
