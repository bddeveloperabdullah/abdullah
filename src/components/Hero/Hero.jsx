import React from "react";
import Button from "../../similar/Button";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaGithub,
  FaLink,
  FaLinkedinIn,
  FaUser,
  FaUserClock,
} from "react-icons/fa";
import AnimatedText from "../../utility/AnimatedText";
import Portfolio from "../Portfolio/Portfolio";
import { IoMail } from "react-icons/io5";

const searviceItem = [
  {
    photo: "/creative.png",
    title: "Planing",
    desc: "Strategic thinker with a structured approach to project planning, ensuring smooth development workflows and on-time delivery with precision.",
  },
  {
    photo: "/figma.png",
    title: "Design",
    desc: "Transforming ideas into visually stunning and user-centric designs with a keen eye for aesthetics and usability.",
  },
  {
    photo: "/coding.png",
    title: "Coding",
    desc: "Passionate about writing clean, maintainable, and optimized code to deliver seamless user experiences.",
  },
];

const Hero = () => {
  return (
    <>
      <section className=" py-5.5">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-0">
            <div className="w-full md:w-6/12 text-white space-y-2.5 lg:space-y-5 ps-5 md:ps-10">
              <h1 className="text-3xl lg:text-5xl font-montserrat font-semibold">
                Hi, I'm Abdullah!
              </h1>
              <AnimatedText />
              <p className="w-5/6 md:w-auto text-sm lg:text-base text-[#96ACAF] font-worksans font-[500]">
                I transform ideas into stunning and high-performance web
                experiences. With expertise in JavaScript, React.js, Next.js,
                TypeScript, and Tailwind CSS, I build fast, interactive, and
                user-friendly applications.
                <span className="hidden lg:block py-3.5">
                  Pixel-perfect design meets seamless functionality—that’s my
                  approach! Whether it's a sleek UI or a high-converting web
                  app, I make sure every detail is just right.
                </span>{" "}
                Let’s create something amazing together! 🚀
              </p>
              <div className="mt-5 md:mt-10 flex items-center gap-3.5 md:gap-10">
                <Link to="/portfolio">
                  <Button className="w-[180px] md:w-[216px] md:h-[52px] text-sm md:text-base flex justify-center items-center gap-2.5">
                    View Project
                    <FaArrowRight className="text-lg" />
                  </Button>
                </Link>

                {/* Social Btn  */}
                <div className="flex justify-center items-center gap-5">
                  <div>
                    <Link to="https://www.linkedin.com/in/developer-joy-shaheb-396107250/">
                      <Button className="size-[45px] flex justify-center items-center bg-transparent border border-borderColor text-white">
                        <FaLinkedinIn />
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Link to="https://github.com/bddeveloperabdullah">
                      <Button className="size-[45px] flex justify-center items-center bg-transparent text-white">
                        <FaGithub className="text-lg" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content  */}
            <div>
              <img className="w-xs md:w-auto" src="/herophoto.png" alt="" />
            </div>
          </div>

          {/* What I Do  */}
          <div className="py-16 md:py-24 px-5 md:px-10">
            <h2 className="text-2xl md:text-3xl text-white text-center font-montserrat font-semibold">
              What I Do
            </h2>

            <div className="flex flex-col md:flex-row justify-between items-center gap-7 md:gap-15 mt-10 md:mt-20">
              {searviceItem.map((item, index) => (
                <div
                  className="w-full md:w-[384px] text-white space-y-1.5 md:space-y-4.5"
                  key={index}
                >
                  <img
                    className="w-[40px] md:w-[50px]"
                    src={item.photo}
                    alt=""
                  />
                  <h2 className="text-xl md:text-[28px] font-montserrat font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base font-worksans font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio  */}
          <Portfolio />

          {/* Contact Us Item  */}

          <div className="py-10 md:py-20 px-5">
            <h2 className="text-2xl md:text-3xl text-center font-montserrat font-semibold text-white">
              Contact Us
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
              <div className="w-full md:w-1/4 bg-[#07292F] border border-borderColor rounded-md text-white flex flex-col items-center gap-2 p-5">
                <FaUser className="text-2xl text-secondary" />
                <h3 className="text-lg md:text-xl font-montserrat font-semibold">
                  Abdullah
                </h3>
                <p className="text-sm font-worksans font-light">
                  Full Stack Developer
                </p>
              </div>
              <div className="w-full md:w-1/4 bg-[#07292F] border border-borderColor rounded-md text-white flex flex-col items-center gap-2 p-5">
                <FaUserClock className="text-3xl text-secondary" />
                <h3 className="text-lg md:text-xl font-montserrat font-semibold">
                  Freelance
                </h3>
                <p className="text-sm font-worksans font-light">
                  Available Right Now
                </p>
              </div>
              <div className="w-full md:w-1/4 bg-[#07292F] border border-borderColor rounded-md text-white flex flex-col items-center gap-2 p-5">
                <IoMail className="text-2xl text-secondary" />
                <h3 className="text-lg md:text-xl font-montserrat font-semibold">
                  Email
                </h3>
                <p className="text-sm font-worksans font-light">
                  bddeveloperabdullah@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
