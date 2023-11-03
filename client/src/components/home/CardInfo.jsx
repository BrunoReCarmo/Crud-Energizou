import React from "react";
import { Icon } from "@chakra-ui/icon";
import { IoLogoLinkedin as LinkedinIcon } from "react-icons/io5";
import { ContentCardInfo } from "../../constantes";

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
          {ContentCardInfo.map((data) => (
            <div className="w-full" key={data.id}>
              <h4 className="mb-2" style={headingStyles}>
                {data.title}
              </h4>
              <p style={paragraphStyles}>{data.content}</p>
              <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
                <a
                  href={data.main_btn_href}
                  target="_blank"
                  className="text-black d-flex align-content-center linear rounded-md bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70"
                >
                  <Icon as={LinkedinIcon} color="blue.500" boxSize={5} />{" "}
                  Linkedin
                </a>
                <button className="text-base font-medium text-lightPrimary 2xl:ml-2">
                  Watch Video
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardInfo;