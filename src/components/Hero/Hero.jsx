import React from "react";
import Button from "../../similar/Button";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaLink, FaLinkedinIn } from "react-icons/fa";
import AnimatedText from "../../utility/AnimatedText";

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
                <Button className="w-[180px] md:w-[216px] md:h-[52px] text-sm md:text-base flex justify-center items-center gap-2.5">
                  <Link to="/portfolio">View Project</Link>
                  <FaArrowRight className="text-lg" />
                </Button>

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
        </div>
      </section>
    </>
  );
};

export default Hero;
