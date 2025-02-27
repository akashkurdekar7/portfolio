import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 pb-1 text-center bg-bgc md:gap-32">
      <div className="w-full">
        <h1 className="text-xl font-bold font-signature text-primary sm:text-2xl md:text-3xl">
          Akash
        </h1>
        <hr className="w-full my-4 border-t-2 border-black" />
      </div>

      <div className="flex flex-col items-center justify-center w-full text-center md:flex-col">
        <h1 className="text-6xl font-signature text-primary sm:text-lg md:text-4xl">
          LET'S WORK
        </h1>
        <h1 className="font-serif text-4xl text-black uppercase sm:text-2xl md:text-8xl">
          TOGETHER
        </h1>
      </div>

      <div className="w-full">
        <hr className="w-full my-4 border-t-2 border-black" />
        <div className="flex flex-col justify-between gap-2 text-lg font-medium md:flex-row sm:text-sm md:text-lg">
          <h4 className="text-black">+91-9916390580</h4>
          <a
            href="mailto:akashkurdekar39@gmail.com"
            className="hover:underline"
          >
            akashkurdekar39@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
