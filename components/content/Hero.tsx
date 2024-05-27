import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      {/* RIGHT */}
      <div className="hero-map  " />
      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src={"/icons/camp.svg"}
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Rano Mafana, Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ipsam
          atque eos soluta? Nisi quo dicta repellendus aliquid, quia
          consequuntur minima sit? Temporibus quasi voluptatum eligendi quis!
          Mollitia, iusto ea!
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src={"/icons/star.svg"}
                  alt="star"
                  key={index}
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-2  ">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
          ></Button>
          <Button
            type="button"
            title="How We Work?"
            variant="btn_white_text"
            leftIcon="/icons/play.svg"
          ></Button>
        </div>
      </div>
      <div className="relative right-sm:right-0 flex flex-1 items-center ">
        <div
          className="relative flex z-20 w-[268px] flex-col gap-8 right-8 md:right-0 bottom-10
        sm:left-2  rounded-3xl bg-green-90 px-7  py-8"
        >
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image
                src={"/icons/close.svg"}
                alt={"close"}
                width={24}
                height={24}
              />
            </div>
            <p className="bold-20 text-white">Haute-Matsiatra</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.29 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.1811 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
