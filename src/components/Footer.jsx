import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center h-auto text-center pb-9 gap-44 bg-bgc">
      <div className="w-full">
        <h1 className="text-4xl font-bold font-signature text-primary">
          Akash
        </h1>
        <hr className="w-full my-4 border-t-2 border-black" />
      </div>

      <div className="w-full">
        <h1 className="text-8xl font-signature text-primary">LET'S WORK</h1>
        <h1 className="font-serif text-6xl text-black uppercase">TOGETHER</h1>
      </div>

      <div className="w-full">
        <hr className="w-full my-4 border-t-2 border-black" />
        <div className="flex justify-between gap-2 text-lg font-medium">
          <h4 className="text-black">+91-9916390580</h4>
          <a
            href="mailto:akashkurdekar39@gmail.com"
            className=" hover:underline"
          >
            akashkurdekar39@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
