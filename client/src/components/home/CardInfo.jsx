import React from "react";
import { Icon } from "@chakra-ui/icon";
import { IoLogoLinkedin as LinkedinIcon } from "react-icons/io5";

function CardInfo() {
  const headingStyles = {
    maxWidth: "100%",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#FFFFFF",
    width: "64%",
    textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
  };

  const paragraphStyles = {
    maxWidth: "100%",
    fontSize: "1rem",
    fontWeight: "medium",
    color: "#E3DAFF",
    width: "64%",
  };

  return (
    <div className="h-full rounded-lg bg-slate-950">
      <div className="flex flex-col justify-center items-center">
        <div className="flex w-full flex-col rounded-md bg-cover px-[30px] py-[30px] md:px-[64px] max-w-[95%] xl:max-w-[800px] w-[95%]">
          <div className="w-full">
            <h4 className="mb-2" style={headingStyles}>
              Entenda mais sobre esse projeto.
            </h4>
            <p style={paragraphStyles}>
              Abaixo você pode ser redirecionado ao Linkedin do desenvolvedor ou
              ReadME.md do repositório GitHub.
            </p>
            <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
              <a href="https://www.linkedin.com/in/bruno-carmo-bb7450227/" className="text-black d-flex align-content-center linear rounded-md bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
                <Icon as={LinkedinIcon} color="blue.500" boxSize={5} /> Linkedin
              </a>
              <button className="text-base font-medium text-lightPrimary 2xl:ml-2">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;