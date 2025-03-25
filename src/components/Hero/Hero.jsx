import React from "react";
import Button from "../../similar/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="py-5.5">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-0">
            <div className="w-full md:w-6/12 text-white space-y-2.5 lg:space-y-5 ps-5">
              <h1 className="text-3xl lg:text-5xl font-montserrat font-semibold">
                Hi, I'm Abdullah!
              </h1>
              <h3 className="text-lg lg:text-2xl text-secondary font-montserrat font-[500]">
                I'm a Front End Developer
              </h3>
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
              <div>
                <Button>
                  <Link to="/portfolio">View Project</Link>
                </Button>
              </div>
            </div>
            <div>
              <img className="w-xs md:w-auto" src="/herophoto.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
