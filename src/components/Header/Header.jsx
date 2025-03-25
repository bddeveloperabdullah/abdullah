import React from "react";
import { Link } from "react-router-dom";
import { menuItem } from "../../db/Menu/Menu";
import Button from "../../similar/Button";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="bg-primary border-b border-borderColor py-6 px-5">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center gap-5">
            <div>
              <Link to="/">
                <h2 className="text-3xl lg:text-4xl text-secondary font-montserrat font-bold">
                  abdullah
                </h2>
              </Link>
            </div>
            <div>
              <div className="hidden md:flex justify-center items-center gap-4 lg:gap-7">
                {menuItem.map((item, index) => (
                  <div key={index}>
                    <Link
                      to={item.url}
                      className="text-base font-worksans font-normal text-white"
                    >
                      {item.itemName}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="hidden md:flex gap-1.5 lg:gap-3.5">
                <Button>
                  <Link to="/haire">Haire Me</Link>
                </Button>

                <Button className="border border-white bg-transparent text-white">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Hambarger Menu  */}
            <div className="block md:hidden">
              <button>
                <IoMenu className="text-3xl text-white cursor-pointer" />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
